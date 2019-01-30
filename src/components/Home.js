import React, { Component } from "react";
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Question from "./Question";

class Home extends Component {
  render() {
    return (
      <Tabs>
        <TabList
          className={["react-tabs__tab-list", "border-grey-light", "mb-2"]}
        >
          <Tab selectedClassName={"border-grey-light rounded-t bg-white"}>
            Unanswered questions
          </Tab>
          <Tab selectedClassName={"border-grey-light rounded-t bg-white"}>
            Answered questions
          </Tab>
        </TabList>
        <TabPanel>
          <ul className="list-reset py-4">
            {this.props.unansweredIds.map(id => (
              <li key={id} className="mb-2">
                <Question id={id} />
              </li>
            ))}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul className="list-reset py-4">
            {this.props.answeredIds.map(id => (
              <li key={id} className="mb-2">
                <Question id={id} />
              </li>
            ))}
          </ul>
        </TabPanel>
      </Tabs>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const user = users[authedUser];

  return {
    unansweredIds: Object.keys(questions)
      .filter(id => !(id in user.answers))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),

    answeredIds: Object.keys(questions)
      .filter(id => id in user.answers)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  };
}

export default connect(mapStateToProps)(Home);
