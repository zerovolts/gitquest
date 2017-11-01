const languageTitles = Object.freeze({
  "Ruby": "Rubyist",
  "Python": "Pythonista",
  "Rust": "Rustacean",
  "Julia": "Julian",
  "Scheme": "Schemer",
  "Common Lisp": "Lisper",
  "Go": "Gopher",
  "Dart": "Dartisan"
})

function generateTitle(primaryLanguage = "Software") {
  return languageTitles[primaryLanguage] || (primaryLanguage + " Developer")
}

export default generateTitle
