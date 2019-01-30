import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    id: ""
  };

  handleChange = e => {
    const id = e.target.value;

    this.setState(() => ({ id }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { id } = this.state;
    const { dispatch } = this.props;

    dispatch(setAuthedUser(id));
  };

  render() {
    const { id } = this.state;
    const { users } = this.props;

    return (
      <div className="text-center mx-auto w-64 py-16">
        <h3 className="mb-2">Sign in to continue:</h3>

        <form onSubmit={this.handleSubmit}>
          <div className="block relative mb-2">
            <select
              className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={this.handleChange}
            >
              <option value="">Select a user</option>
              {Object.keys(users).map(key => (
                <option key={key} value={users[key].id}>
                  {users[key].name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <button
            className={`bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded w-64 mb-2 ${!id &&
              "opacity-50 cursor-not-allowed"}`}
            type="submit"
            disabled={!id}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(Login));
