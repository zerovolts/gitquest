import {observable, computed} from "mobx"

import query from "../helpers/graphql-query"
import calculateStats from "../helpers/calculate-stats"

class GitHubUser {
  @observable user = {}
  @observable all_repos = []
  @observable linked_repos = []

  @computed get repos() {
    if (this.all_repos) {
      return this.all_repos
        .filter(repo => !repo.isFork)
        .filter(repo => repo.owner.login == this.user.login)
        .map(repo => Object.assign({
          linked: this.linked_repos.some(linked_repo => linked_repo.name == repo.name)
        }, repo))
    } else {
      return this.all_repos
    }
  }

  @computed get stats() {
    return calculateStats(this.repos)
  }

  loadLinkedRepos() {
    fetch("/api/v1/repos", {credentials: "same-origin"})
      .then(res => res.json())
      .then(data => {
        this.linked_repos = data
      })
  }

  loadUser(login) {
    fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify({query: query, variables: {login: login}}),
      headers: {
        "Authorization": "Basic " + btoa("zerovolts:a0e0d456b7ccfc32519eb7b084e77d2cc7940fe6"),
        "Content-Type": "application/graphql"
      }
    }).then(res => res.json())
      .then(data => {
        this.user = data.data.user
        this.all_repos = this.user.repositories.nodes
      })
  }
}

export default GitHubUser
