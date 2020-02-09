import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../Actions/Empactions";

const Login = props => {
  const [email, setEmail] = React.useState("");
  const [password, setPasswrd] = React.useState("");
  return (
    <div className="container">
      <div
        style={{
          height: "20px"
        }}
      ></div>
      <div className="login">
        <div className="container">
          <div className="row jumbotron">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">One of Us?</h1>
              <p className="lead text-center">
                Already have an account... Just Sign In
              </p>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  props.loginUser({
                    username: email,
                    password: password
                  });
                }}
              >
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg bg-dark text-white"
                    placeholder="Email Address"
                    name="email"
                    defaultValue=""
                    required
                    onChange={e => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg bg-dark text-white"
                    placeholder="Password"
                    name="password"
                    defaultValue=""
                    required
                    minLength={8}
                    onChange={e => {
                      setPasswrd(e.target.value);
                    }}
                  />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>{" "}
              <br />
              {props?.errors?.error ? (
                <div className="alert alert-danger text-center">
                  <b>{props?.errors?.error}</b>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
