let query = `
query User($login: String!) {
  user(login: $login) {
    name
    login
    bio
    url
    avatarUrl
    repositories(last: 50) {
      nodes {
        id
        name
        description
        isFork
        owner {
          login
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

const fetchData = login => {
  return (
    fetch('https://api.github.com/graphql', {
      method: 'post',
      headers: {
        'Authorization': 'Basic '+btoa('zerovolts:a0e0d456b7ccfc32519eb7b084e77d2cc7940fe6'),
        'Content-Type': 'application/graphql'
      },
      body: JSON.stringify({query: query, variables: {login: login}})
    }).catch(error => {
        console.log(error)
      })
    )
}

export default fetchData
