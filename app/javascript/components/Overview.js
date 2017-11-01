import React from "react"

const Overview = props => {
  const rows = props.stats.sortedKeys.map(key =>
    <tr className="language-tr" key={key}>
      <td style={{color: props.stats.languageColors[key]}}>{key}</td>
      <td>{props.stats.languagePercents[key]}%</td>
    </tr>
  )

  return (
    <div className="grid-x">
      <div className="small-12 cell">
        <div className="content">
          <h4>Languages: {props.stats.sortedKeys.length}</h4>
          <table className="language-table">
            <tbody className="language-tbody">
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Overview
