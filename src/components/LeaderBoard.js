import React, { Component } from "react";
import { connect } from "react-redux";

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;

    return (
      <div className="border rounded p-4 mb-4">
        <ul className="list-reset">
          {Object.keys(users).map(user => (
            <li
              key={users[user].id}
              className="flex items-center justify-between border rounded p-4 mb-4 w-full"
            >
              <div className="flex items-center">
                <img
                  className="w-24 h-24 rounded-full mr-4"
                  alt={users[user].name}
                  src={users[user].avatarURL}
                />
                <div>
                  <h3 className="mb-2">
                    <em>{users[user].name}</em>
                  </h3>
                  <ul>
                    <li className="mb-1">
                      Answered:{" "}
                      <strong>{Object.keys(users[user].answers).length}</strong>
                    </li>
                    <li className="mb-1">
                      Asked: <strong>{users[user].questions.length}</strong>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="uppercase font-bold text-sm text-grey-darker font-light tracking-wide text-center">
                <div>Score</div>
                <div className="rounded-full bg-teal text-white w-16 h-16 flex items-center justify-center text-3xl">
                  {Object.keys(users[user].answers).length +
                    users[user].questions.length}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const sortedUsers = {};

  Object.keys(users)
    .sort(function(a, b) {
      return (
        Object.keys(users[b].answers).length +
        users[b].questions.length -
        (Object.keys(users[a].answers).length + users[a].questions.length)
      );
    })
    .forEach(function(key) {
      sortedUsers[key] = users[key];
    });

  return {
    users: sortedUsers
  };
}

export default connect(mapStateToProps)(LeaderBoard);
