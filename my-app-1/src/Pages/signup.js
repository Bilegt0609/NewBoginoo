import logo from "../images/link.png";
import "../Styles/signup.css";
import axios from "axios";
import { useEffect, useState } from "react";

const SignUp = () => {

    const [URL, setURL] = useState(" ")

  const handleInput = async (event) => {
    setURL( event.target.value );
  };

  const logValue = async () => {
    // const postData = async (res) => {
    //   try {
    //     res = axios.post("http://localhost:8888/link", {
    //     //   original: URL
    //     })
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // postData()
    console.log(URL)
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
                    <div><input className="Mail-input" placeholder="name@mail.domain" onChange={handleInput}></input></div> 
                </div>
                <div className="Password-Header">
                    <div className="Password">Нууц үг</div> 
                    <div><input className="Password-input" placeholder="••••••••••" onChange={handleInput}></input></div>
                </div>
                <div className="Repeat-Header">
                    <div className="Repeat">Нууц үгээ давтна уу?</div>
                    <input className="Repeat-Password" placeholder="••••••••••" onChange={handleInput}></input>
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