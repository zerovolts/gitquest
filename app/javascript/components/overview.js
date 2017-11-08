import React from "react"

class Overview extends React.Component {
  // componentDidMount() {
  //   const ctx = document.getElementById("myChart").getContext('2d');
  //   const myChart = new Chart(ctx, {
  //       type: 'doughnut',
  //       data: {
  //         datasets: [{
  //           data: [10, 20, 30]
  //         }],
  //         labels: [
  //           'Red',
  //           'Yellow',
  //           'Blue'
  //         ]
  //       }
  //   })
  // }

  render() {
    const rows = this.props.stats.sortedKeys.map(key =>
      <tr className="language-tr" key={key}>
        <td style={{color: this.props.stats.languageColors[key]}}>{key}</td>
        <td>{this.props.stats.languagePercents[key]}%</td>
      </tr>
    )

    return (
      <div className="grid-x">
        <div className="small-12 cell">
          <div className="content">
            <h4>Languages: {this.props.stats.sortedKeys.length}</h4>

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
}

// <canvas id="myChart" width="100px" height="100px"></canvas>

export default Overview
