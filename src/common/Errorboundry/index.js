import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    console.log("firess getderived");
    return { hasError: true };
    //  this.setState({
    //    hasError:true,
    //  })
  }

  componentDidCatch(error, info) {
    console.log("firess getderivedcatch", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: "white", textAlign: "center" }}>
          <h1> An Error Occured on Developement Side</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
