import {observable, computed} from "mobx"

class NavBar {
  @observable showSearch = false
  @observable showDropdown = false
  @observable searchString = ""
  @observable wrapperRef = null

  constructor() {
    this.handleChange = this.handleChange.bind(this)
    this.toggleSearch = this.toggleSearch.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.closeDropdown = this.closeDropdown.bind(this)
    this.signOut = this.signOut.bind(this)
    this.signIn = this.signIn.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
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

  closeDropdown() {
    this.showDropdown = false
  }

  signIn() {
    window.location.replace("/auth/github")
  }

  signOut() {
    window.location.replace("/signout")
    this.closeDropdown()
  }

  handleEnter(event, history) {
    if ((event.key == "Enter") && this.searchString) {
      history.push("/" + this.searchString)
    }
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.closeDropdown()
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }
}

export default NavBar
