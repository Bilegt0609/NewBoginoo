import logo from "../images/link.png";
import "../styles/Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {
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
  return (
    <div className="Boginoo-Home">
      <div className="Header">
        <strong className="Usage">Хэрхэн ажилладаж вэ?</strong>
        {}
        <a className="Login" href="/Login">
          Нэвтрэх
        </a>
      </div>
      <div className="Body">
        <div className="Big-Logo">
          <img className="Logo" src={logo}></img>
          <div className="Title">Boginoo</div>
        </div>
        <div className="Link">
          <input
            type={JSON}
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
