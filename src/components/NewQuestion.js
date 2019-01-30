import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleSaveQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: ""
  };

  handleOptionOneChange = e => {
    this.setState({
      optionOneText: e.target.value
    });
  };

  handleOptionTwoChange = e => {
    this.setState({
      optionTwoText: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { dispatch } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    const author = this.props.authedUser;

    dispatch(handleSaveQuestion({ optionOneText, optionTwoText, author }));
    this.props.history.push(`/`);
  };

  render() {
    return (
      <div className="border rounded p-4 mb-4">
        <h3 className="mb-4">New Question</h3>
        <h4 className="mb-2 uppercase font-bold text-sm text-grey-darker font-light tracking-wide">
          Would you rather?
        </h4>
        <form onSubmit={this.handleSubmit}>
          <input
            className="appearance-none block w-full bg-white border border-grey-light hover:border-grey px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={this.state.optionOneText}
            onChange={this.handleOptionOneChange}
            placeholder="Option 1"
          />
          <p className="font-bold uppercase text-center my-4">or</p>
          <input
            className="appearance-none block w-full bg-white border border-grey-light hover:border-grey px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={this.state.optionTwoText}
            onChange={this.handleOptionTwoChange}
            placeholder="Option 2"
          />
          <button
            className="block w-24 bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded no-underline text-center my-4"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default withRouter(connect(mapStateToProps)(NewQuestion));
