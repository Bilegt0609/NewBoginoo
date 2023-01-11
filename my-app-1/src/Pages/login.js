import logo from "../images/link.png";
import "../styles/Login.css";
import axios from "axios";
import { useEffect, useState } from "react";


const Login = () => {


    useEffect(() => {
        const getData = async () => {
          const res = await axios.get("http://localhost:8888/user")
          console.log(res.data.data[0])
        }
        getData()
      }, [])

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
                    <div><input className="Mail-input" placeholder="name@mail.domain"></input></div> 
                </div>
                <div className="Password-Header">
                    <div className="Password">Нууц үг</div> 
                    <div><input className="Password-input" placeholder="••••••••••"></input></div>
                </div>
                <a className="ForgotPassword" href="/Forgotpass">Нууц үгээ мартсан</a>
                <button className="Login-button">Нэвтрэх</button>
                <a className="Signin" href="/Signup">Шинэ хэрэглэгч бол энд дарна уу?</a>
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