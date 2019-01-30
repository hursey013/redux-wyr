import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Nav from "./Nav";
import Home from "./Home";
import QuestionPage from "./QuestionPage";
import Footer from "./Footer";
import NoMatch from "./NoMatch";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Logout from "./Logout";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="max-w-md mx-auto p-4 text-black">
          <h1 className="border-b mb-4 pb-4 text-center">Would you rather?</h1>
          {this.props.authedUser ? (
            <div>
              <Nav />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/question/:id" component={QuestionPage} />
                <Route path="/add" component={NewQuestion} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/logout" component={Logout} />
                <Route component={NoMatch} />
              </Switch>
              <Footer />
            </div>
          ) : (
            <Login users={this.props.users} />
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(App);
