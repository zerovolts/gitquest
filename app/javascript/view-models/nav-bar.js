import {observable, computed} from "mobx"

class NavBar {
  @observable showSearch = false
  @observable showDropdown = false
  @observable searchString = ""

  constructor() {
    this.handleChange = this.handleChange.bind(this)
    this.toggleSearch = this.toggleSearch.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.signOut = this.signOut.bind(this)
    this.signIn = this.signIn.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  handleChange(event) {
    this.searchString = event.target.value
  }

  toggleSearch() {
    this.showSearch = !this.showSearch
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown
  }

  signIn() {
    window.location.replace("/auth/github")
  }

  signOut() {
    window.location.replace("/signout")
    this.showDropdown = false
  }

  handleEnter(event, history) {
    if ((event.key == "Enter") && this.searchString) {
      console.log(event)
      history.push("/" + this.searchString)
    }
  }
}

export default NavBar
