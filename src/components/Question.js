import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Question extends Component {
  render() {
    const { question, author, id } = this.props;

    return (
      <div className="border rounded p-4 mb-4">
        <div className="mb-2">
          <h3 className="mb-2">
            <em>{author}</em> asks, would you rather:
          </h3>
          ...{question.optionOne.text} or {question.optionTwo.text}?
        </div>
        <Link
          to={`/question/${id}`}
          className="block w-24 bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded no-underline text-center"
        >
          View poll
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];
  const author = users[questions[id].author].name;

  return {
    question,
    author
  };
}

export default connect(mapStateToProps)(Question);
