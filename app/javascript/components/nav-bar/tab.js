import React from "react"
import {Link} from "react-router-dom"

const Tab = ({title, url, path}) => {
  const selectedClass = (path == url) ? "selected" : null

  return (
    <div className="large-1 cell">
      <Link to={url}>
        <div className={`nav-tab ${selectedClass}`}>
          {title}
        </div>
      </Link>
    </div>
  )
}

export default Tab
