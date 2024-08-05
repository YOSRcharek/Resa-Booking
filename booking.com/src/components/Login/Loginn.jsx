import React, {useState,useEffect} from "react";
import styles from "./Login.module.css";
import GoogleLogin, {GoogleLogout} from "react-google-login";
import {Link} from "react-router-dom";
import "./styleLogin.css";
import { initializeFormToggle } from "./formToggle";



const Login = () => {
  useEffect(() => {
    initializeFormToggle();
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    let str = e.target.value;
    if (str.includes("@") && str.includes(".")) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };


  const responseGoogle = (res) => {
    let data = { ...res.profileObj, events: {} };
    localStorage.setItem("login", JSON.stringify(data));
    setTimeout(() => {
      let data = JSON.parse(localStorage.getItem("login"));
      if (data) {
        alert("You have successfully Logged In")
        document.location.href = "http://localhost:3001/";
      }
    }, 5000)

  };

  return (
    <section className="SignUp">
    <div className="containerSignUp" id="containerSignUp">
      <div className="form-containerSignUp sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-containerSignUp sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <a href="#">Forget Your Password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="toggle-containerSignUp">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" id="login">Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className="hidden" id="register">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Login;

export const Logout = () => {
  const logoutres = () => {
    console.log("logout");
  };

  return <div>
    <GoogleLogout
      className={styles.logout}
      clientId="378817930652-26drd8dhlmr4qet0ilu2qts92m12mpdr.apps.googleusercontent.com"
      buttonText=""
      onLogoutSuccess={logoutres}
    >
      <p style={{ marginBottom: "8px", marginRight: "10px" }} className={styles.logoutText}>logout</p>
    </GoogleLogout>
  </div>

}


