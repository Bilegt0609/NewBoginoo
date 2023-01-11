import logo from "../images/link.png";
import "../styles/Signup.css";
import axios from "axios";
import { useEffect, useState } from "react";

const SignUp = () => {

  const [Email, setEmail] = useState(" ")
  const [Password, setPassword] = useState(" ")
  const [Try, setTry] = useState(" ")
  

  const TryPassword = async (event) => {
    setTry( event.target.value ); 
  };

  const PasswordInput = async (event) => {
    setPassword( event.target.value );
  };

  const EmailInput = async (event) => {
    setEmail( event.target.value );
  };

  const logValue = async () => {
    if(Password == Try) {
        const postData = async (res) => {
            try {
              res = axios.post("http://localhost:8888/user", {
                email: Email,
                password: Password
              })
            } catch (error) {
              console.log(error);
            }
          }
          postData()
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
            <div className="User2">
                <strong className="Login-Logo">Бүртгүүлэх</strong>
                <div className="Mail-Header">
                    <div className="Mail">Цахим хаяг</div>
                    <div><input type="email" className="Mail-input" placeholder="name@mail.domain" onChange={EmailInput}></input></div> 
                </div>
                <div className="Password-Header">
                    <div className="Password">Нууц үг</div> 
                    <div><input type="password" className="Password-input" placeholder="••••••••••" onChange={PasswordInput}></input></div>
                </div>
                <div className="Repeat-Header">
                    <div className="Repeat">Нууц үгээ давтна уу?</div>
                    <input type="password" className="Repeat-Password" placeholder="••••••••••" onChange={TryPassword}></input>
                </div>
                <button className="Signup-button" onClick={logValue}>Бүртгүүлэх</button>
            </div>
        </div>
        <div className="Footer">
            <div className="Made">Made with ♥️ by Nest Academy</div>
            <div className="Date">©boginoo.io 2020</div>
        </div>
    </div>
  );
};
export default SignUp;