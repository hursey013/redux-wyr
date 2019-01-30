import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleSaveAnswer } from "../actions/questions";

class QuestionPage extends Component {
  state = {
    selectedOption: "optionOne"
  };

  handleOptionChange = e => {
    this.setState({
      selectedOption: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { selectedOption } = this.state;
    const { dispatch, id } = this.props;

    dispatch(handleSaveAnswer(id, selectedOption));
  };

  percentage = (votes, total) => {
    return (
      <div className="text-sm">
        Votes: <strong>{Math.round((votes.length / total) * 100)}%</strong>, or{" "}
        {votes.length} out of {total} votes
      </div>
    );
  };

  render() {
    const { authedUser, question, author, answered } = this.props;

    if (!question) {
      return <Redirect to="/404" />;
    }

    const optionOne = question.optionOne;
    const optionTwo = question.optionTwo;
    const total = optionOne.votes.length + optionTwo.votes.length;

    return (
      <div className="border rounded p-4 mb-4">
        <div className="flex items-center">
          <img
            className="w-24 h-24 rounded-full mr-4"
            alt={author.name}
            src={author.avatarURL}
          />
          <div>
            <h3 className="mb-4">
              <em>{author.name}</em> asks, would you rather:
            </h3>
            {!answered ? (
              <form onSubmit={this.handleSubmit}>
                <div className="mb-2">
                  {[
                    { question: optionOne, val: "optionOne" },
                    { question: optionTwo, val: "optionTwo" }
                  ].map(option => (
                    <label key={option.val} className="block mb-1">
                      <input
                        className="mr-2 leading-tight"
                        type="radio"
                        value={option.val}
                        checked={this.state.selectedOption === option.val}
                        onChange={this.handleOptionChange}
                      />
                      <span className="text-sm">{option.question.text}</span>
                    </label>
                  ))}
                </div>
                <button
                  className="block w-24 bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded no-underline text-center"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div>
                <h4 className="mb-2 uppercase font-bold text-sm text-grey-darker font-light tracking-wide">
                  Results:
                </h4>
                <ul>
                  {[
                    { question: optionOne, val: "optionOne" },
                    { question: optionTwo, val: "optionTwo" }
                  ].map(option => (
                    <li key={option.val} className="mb-4">
                      <p className="mb-1">
                        {option.question.text}{" "}
                        {option.question.votes.includes(authedUser) && (
                          <span className="text-xs text-teal font-bold">
                            (You voted for this)
                          </span>
                        )}
                      </p>
                      {this.percentage(option.question.votes, total)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  const author = question ? users[questions[id].author] : null;

  return {
    authedUser,
    question,
    author,
    id,
    answered: id in users[authedUser].answers
  };
}

export default connect(mapStateToProps)(QuestionPage);
