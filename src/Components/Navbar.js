import React from "react";
import { logout } from "../Actions/Empactions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Navbar = props => {
  React.useEffect(() => {
    if (props.emp.user === "" || undefined || null) {
      props.history.push("/");
    } else {
      props.history.push("/dashboard");
    }
  }, [props.emp.user]);
  return (
    <nav className="navbar navbar-expand-lg navbar-center navbar-dark bg-dark ">
      <a className="navbar-brand" href="#">
        Appiness Interactive
      </a>
      <div className="collapse navbar-collapse" id="navbarText"></div>
      {props.emp.user ? (
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <span
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  props.logout();
                }}
              >
                Logout
              </span>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

const mapStateToProps = state => ({
  emp: state.emp
});

export default withRouter(connect(mapStateToProps, { logout })(Navbar));
