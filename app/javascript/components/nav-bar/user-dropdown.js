import React from "react"
import {Link} from "react-router-dom"

// class UserDropdown extends React.Component {
//   componentDidMount() {
//     document.addEventListener('mousedown', this.props.vm.handleClickOutside);
//   }
//
//   componentWillUnmount() {
//     document.removeEventListener('mousedown', this.props.vm.handleClickOutside);
//   }
//
//   render() {
//     return (
//       <div className="user-dropdown" ref={this.props.vm.setWrapperRef}>
//         <Link to={"/" + this.props.currentUser.login}>
//           <div className="user-dropdown-selection">
//             Profile
//           </div>
//         </Link>
//         <a href="/signout">
//           <div className="user-dropdown-selection">
//             Sign Out
//           </div>
//         </a>
//       </div>
//     )
//   }
// }

const UserDropdown = props => {
  return (
    <div className="user-dropdown">
      <Link to={"/" + props.currentUser.login}>
        <div className="user-dropdown-selection">
          Profile
        </div>
      </Link>
      <a href="/signout">
        <div className="user-dropdown-selection">
          Sign Out
        </div>
      </a>
    </div>
  )
}

export default UserDropdown
