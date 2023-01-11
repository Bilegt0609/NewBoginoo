import logo from "../images/link.png";
import "../styles/Forgotpass.css";

const Forgotpass = () => {

  return (
    <div className="Boginoo-Home">
        <div className="Header">
            <strong className="Usage3">Хэрхэн ажилладаж вэ?</strong>
        </div>
        <div className="Body">
            <div className="Big-Logo">
                <img className="Logo" src={logo}></img>
                <div className="Title">Boginoo</div>
            </div>
            <div className="Forgotpass">
                <strong className="Forgotpass-Title">Нууц үг сэргээх</strong>
                <div className="Forgotpass-Usage">Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.</div>
                <div className="Forgotpass-Mail">
                    <div className="Forgotpass-Mail-Title">Цахим хаяг</div>
                    <input className="Forgotpass-Mail-input" placeholder="name@mail.domain"></input>
                </div>
                <button className="Forgotpass-Sent">Илгээх</button>
            </div>
        </div>
        <div className="Footer">
            <div className="Made">Made with ♥️ by Nest Academy</div>
            <div className="Date">©boginoo.io 2020</div>
        </div>
    </div>
  );
};
export default Forgotpass;