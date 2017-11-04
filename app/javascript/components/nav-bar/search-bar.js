import React from "react"
import {observer} from "mobx-react"

const SearchBar = observer(({vm, history}) => ([
  <div className="large-4 large-offset-1 cell" key="1">
    <div className="search-bar">
      <input
        type="text"
        value={vm.searchString}
        onChange={vm.handleChange}
        onKeyPress={event => vm.handleEnter(event, history)}>
      </input>
    </div>
  </div>,
  <div className="large-1 cell" key="2">
    <i className="fa fa-times search-icon" aria-hidden="true" onClick={vm.toggleSearch}></i>
  </div>
]))


export default SearchBar
