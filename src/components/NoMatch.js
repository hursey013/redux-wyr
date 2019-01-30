import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  render() {
    return (
      <div className="text-center mx-auto w-64 py-16">
        <h3 className="mb-2">Page not found (404)</h3>
      </div>
    );
  }
}

export default connect()(Login);
