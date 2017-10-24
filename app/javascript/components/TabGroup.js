import React from 'react'

const TabGroup = props => (
  <div className="tab-bar">
    <div className="radio-horizontal" value={props.currentTab}>
      {props.tabs.map(tabName => [
        <input
          type="radio"
          name="section"
          id={tabName}
          key={tabName + "-input"}
          onClick={() => props.switchTab(tabName)} />,
        <label htmlFor={tabName} key={tabName + "-label"}>{tabName}</label>
      ]
      )}
    </div>
  </div>
)

export default TabGroup
