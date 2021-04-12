import React, { Component } from "react";
import Fire from "../../helper/Fire";
import Home from "../Home";
import Login from "../Login";
import District from "../District";

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListner();
  }
  authListner() {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return <>{this.state.user ? <Home /> : <Login />};</>;
  }
}

export default Root;
