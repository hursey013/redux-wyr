import React, { Component } from "react";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    const name = this.props.user && this.props.user.name;

    return (
      <div className="border-t mt-4 pt-4 text-center">
        You are logged in as <strong>{name}</strong>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser];

  return {
    user
  };
}

export default connect(mapStateToProps)(Footer);
