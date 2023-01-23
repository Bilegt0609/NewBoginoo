import logo from "../images/link.png";
import "../styles/Login.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

const Login = () => {
  const cookies = new Cookies 
  const navigate = useNavigate();
  const [Email, setEmail] = useState(" ");
  const [Password, setPassword] = useState(" ");

  const PasswordInput = async (event) => {
    setPassword(event.target.value);
  };

  const EmailInput = async (event) => {
    setEmail(event.target.value);
  };

  const logValue = async () => {
    try {
      const response = await axios.post("http://localhost:8888/auth/login", {
        email: Email,
        password: Password,
      });
      cookies.set("user", response.data.email);
      cookies.set("token", response.data.token);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Boginoo-login">
      <div className="Header">
        <strong className="Usage2">Хэрхэн ажилладаж вэ?</strong>
      </div>
      <div className="Body">
        <div className="Big-Logo">
          <img className="Logo" src={logo}></img>
          <div className="Title">Boginoo</div>
        </div>
        <div className="User">
          <strong className="Login-Logo">Нэвтрэх</strong>
          <div className="Mail-Header">
            <div className="Mail">Цахим хаяг</div>
            <div>
              <input
                type="email"
                className="Mail-input"
                placeholder="name@mail.domain"
                onChange={EmailInput}
              ></input>
            </div>
          </div>
          <div className="Password-Header">
            <div className="Password">Нууц үг</div>
            <div>
              <input
                type="password"
                className="Password-input"
                placeholder="••••••••••"
                onChange={PasswordInput}
              ></input>
            </div>
          </div>
          <a className="ForgotPassword" href="/Forgotpass">
            Нууц үгээ мартсан
          </a>
          <button onClick={logValue} className="Login-button">
            Нэвтрэх
          </button>
          <a className="Signin" href="/Signup">
            Шинэ хэрэглэгч бол энд дарна уу?
          </a>
        </div>
      </div>
      <div className="Footer">
        <div className="Made">Made with ♥️ by Nest Academy</div>
        <div className="Date">©boginoo.io 2020</div>
      </div>
    </div>
  );
};
export default Login;
