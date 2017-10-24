const languageTitles = {
  "Ruby": "Rubyist",
  "Python": "Pythonista",
  "Rust": "Rustacean",
  "Julia": "Julian"
}

function generateTitle(primaryLanguage) {
  return languageTitles[primaryLanguage] || (primaryLanguage + " Developer")
}

export default generateTitle
