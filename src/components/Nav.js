import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

class Nav extends Component {
  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null));
  };

  render() {
    return (
      <nav>
        <ul className="list-reset flex mb-4">
          {[
            { name: "Home", path: "/", exact: true },
            { name: "New Question", path: "/add" },
            { name: "Leaderboard", path: "/leaderboard" }
          ].map(link => (
            <li className="flex-1 mr-2" key={link.name}>
              <NavLink
                to={link.path}
                exact={link.exact ? true : false}
                className="text-center block border border-white rounded hover:border-grey-lighter text-teal hover:bg-grey-lighter py-2 px-4"
                activeClassName="bg-grey-lighter"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className="flex-1 mr-2">
            <button
              onClick={this.handleLogout}
              className="text-center block border border-white rounded hover:border-grey-lighter text-teal hover:bg-grey-lighter py-2 px-4 w-full"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect()(Nav);
