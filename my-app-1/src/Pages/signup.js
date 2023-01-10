import logo from "../images/link.png";
import "../Styles/signup.css";


const Login = () => {
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
                    <div><input className="Mail-input" placeholder="name@mail.domain"></input></div> 
                </div>
                <div className="Password-Header">
                    <div className="Password">Нууц үг</div> 
                    <div><input className="Password-input" placeholder="••••••••••"></input></div>
                </div>
                <div className="Repeat-Header">
                    <div className="Repeat">Нууц үгээ давтна уу?</div>
                    <input className="Repeat-Password" placeholder="••••••••••"></input>
                </div>
                <button className="Signup-button">Бүртгүүлэх</button>
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