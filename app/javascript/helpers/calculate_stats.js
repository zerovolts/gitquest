const flattenArray = (array) => (
  Array.isArray(array) ? [].concat(...array.map(flattenArray)) : array
)

const calculateStats = (repos) => {
  const languages = flattenArray(repos.map(repo => repo.languages.edges))
  const totalBytes = languages.reduce((acc, cur) => acc + cur.size, 0)

  const languageBytes = languages.reduce((acc, lang) => {
    acc[lang.node.name] ? acc[lang.node.name] += lang.size : acc[lang.node.name] = lang.size
    return acc
  }, {})

  const languagePercents = Object.keys(languageBytes).reduce((acc, key) => {
    acc[key] = ((languageBytes[key] / totalBytes) * 100).toFixed(2)
    return acc
  }, {})

  const languageColors = languages.reduce((acc, lang) => {
    acc[lang.node.name] = lang.node.color
    return acc
  }, {})

  const sortedKeys = Object.keys(languagePercents).sort((a, b) =>
    languagePercents[b] - languagePercents[a]
  )

  return {
    languagePercents: languagePercents,
    languageColors: languageColors,
    sortedKeys: sortedKeys
  }
}

export default calculateStats
