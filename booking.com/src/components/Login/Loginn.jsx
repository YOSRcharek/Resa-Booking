import React, {useState,useEffect} from "react";
import styles from "./Login.module.css";
import GoogleLogin, {GoogleLogout} from "react-google-login";
import {Link} from "react-router-dom";
import "./styleLogin.css";
import { initializeFormToggle } from "./formToggle";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  console.log("hekpoekk LOOOOOOGIN");
  
  useEffect(() => {
    initializeFormToggle();
  }, []);
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleSubmit = async (e) => {

    history.push(`/Hosts`);
  
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        username,
        password,
      });
  
      if (response.status === 200 && response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('login', response.data.access_token);
        console.log('Login successful');
      } else {
       console.log('Login failed');
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
      console.log('Login failed');
      console.log(error);
    }
  };
  
  console.log(username);
  console.log(password);
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
          <input type="email" placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}/>
          <input type="password" placeholder="Password"  
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          <a href="#">Forget Your Password?</a>
          <button type="submit" onClick={handleSubmit}>Sign In</button>
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


