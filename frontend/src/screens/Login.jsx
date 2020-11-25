/* eslint-disable */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../services/authService";
import { useStateValue } from "../reducer/StateProvider";
import "../styles/Login.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [{}, dispatch] = useStateValue();

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const { data: user } = await login(username, password);
      console.log(user);

      if (user) {
        // the user just logged in / the user was logged in
        toast.info(`Hello ${user.username}, you are logged in`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        dispatch({
          type: "SET_USER",
          user: user,
        });

        history.push("/");
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error("Invalid Username or Password!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log("error");
      }
    }
  };

  return (
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>Username</h5>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <div className="socials">
          <LinkedInIcon
            type="submit"
            onclick={signIn}
            classname="login_LinkedInButton"
          />
          <InstagramIcon
            type="submit"
            onclick={signIn}
            classname="login_InstagramButton"
          />

          <FacebookIcon
            type="submit"
            onclick={signIn}
            classname="login_FacebookButton"
          />
        </div>
        <p className="login_conditions">
          By signing-in you agree to the Atlantis' Conditions of Use & Sale.
        </p>
        <Link to="/register">
          <button className="login__registerButton">
            Create your Atlantis Account
          </button>
        </Link>
      </div>
  );
}

export default Login;
