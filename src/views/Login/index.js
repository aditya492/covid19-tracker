import React, { Component } from "react";
import Fire from "../../helper/Fire";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  login = (e) => {
    e.preventDefault();
    Fire.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        alert("Please SignUp with your Email ID");
        console.log(err);
        this.setState({
          email: "",
          password: "",
        });
      });
  };

  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  signup = (e) => {
    e.preventDefault();
    Fire.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };

  render() {
    return (
      <div className="login-popup">
        <div className="box">
          <div class="image-area">
            <h2 className="Head">Aditya & Company pvt. ltd. Welcomes You !</h2>
          </div>

          <div className="form">
            <form>
              <div className="form-group">
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={(e) => this.handlechange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={(e) => this.handlechange(e)}
                />
              </div>
              <button type="button" className="btn" onClick={this.login}>
                Log In
              </button>
              <button type="button" className="btn" onClick={this.signup}>
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
