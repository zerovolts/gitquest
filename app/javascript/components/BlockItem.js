import React from 'react'

const BlockItem = props => (
  <div className="grid-x">
    <div className="small-12 cell">
      <div className="content">
        <h4>{props.name}</h4>
        <p>{props.body}</p>
      </div>
    </div>
  </div>
)

export default BlockItem
