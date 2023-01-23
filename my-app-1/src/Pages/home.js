import logo from "../images/link.png";
import "../styles/Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { createElement } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [URL, setURL] = useState(" ");

  const handleInput = async (event) => {
    setURL(event.target.value);
  };

  const logValue = async () => {
    try {
      const response = await axios.post("http://localhost:8888/link", {
        original: URL,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const storage = JSON.stringify(cookies.get("user"));
  
  const classname = "menu"

  const menubar = () => {
    if(classname == "menu"){
      classname = "block"
    }else{
      classname = "menu"
    }
  }

  const LogOut = () => {
    cookies.remove('user');
    navigate('/login')
  }

  function Greeting({ name }) {
    if (storage === undefined) {
      return (
        <a className="Login" href="/Login">
          Нэвтрэх
        </a>
      );
    } else {
      return (
        <div>
          <button className="User2" onClick={menubar}>
            {storage.split(":")[1]}
          </button>
          <div className={classname}>
            <button className="History">History</button>
            <button className="LogOut" onClick={LogOut}>LogOut</button>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="Boginoo-Home">
      <div className="Header">
        <strong className="Usage">Хэрхэн ажилладаж вэ?</strong>
        {/* <a className="Login" href="/Login">
          Нэвтрэх
        </a> */}
        <Greeting/>
      </div>
      <div className="Body">
        <div className="Big-Logo">
          <img className="Logo" src={logo}></img>
          <div className="Title">Boginoo</div>
        </div>
        <div className="Link">
          <input
            className="Link_input"
            placeholder="https://www.web-huudas.mn"
            onChange={handleInput}
          ></input>
          <button className="Link_button" onClick={logValue}>
            Богиносгох
          </button>
        </div>
      </div>
      <div className="Footer">
        <div className="Made">Made with ♥️ by Nest Academy</div>
        <div className="Date">©boginoo.io 2020</div>
      </div>
    </div>
  );
};
export default Home;
