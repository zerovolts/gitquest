const query = `
query User($login: String!) {
  user(login: $login) {
    name
    login
    bio
    url
    avatarUrl
    repositories(last: 100) {
      nodes {
        id
        name
        description
        url
        isFork
        owner {
          login
        }
        stargazers {
          totalCount
        }
        primaryLanguage {
          name
          color
        }
        languages(first: 5) {
          edges {
            node {
              name
              color
            }
            size
          }
          totalSize
        }
      }
    }
  }
}
`

export default query
