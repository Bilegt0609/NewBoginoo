import logo from "../images/link.png";
import "../styles/Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [URL, setURL] = useState();
  const [shortenedLink, setShortenedLink] = useState("");

  const handleInput = async (event) => {
    setURL(event.target.value);
  };

  const storage = JSON.stringify(cookies.get("user"));

  useEffect(() => {
    if (storage === undefined) {
      navigate("/Login");
    }
  });

  const LogOut = () => {
    cookies.remove("user");
    cookies.remove("token");
    navigate("/login");
  };

  const History = () => {
    navigate("/history");
  }

  function Greeting() {
    if (storage === undefined) {
      return (
        <a className="Login" href="/Login">
          Нэвтрэх
        </a>
      );
    } else {
      return (
        <div>
          <button className="User2-1">{storage}</button>
          <div className="menu">
            <button className="History" onClick={History}>
              History
            </button>
            <button className="LogOut" onClick={LogOut}>
              LogOut
            </button>
          </div>
        </div>
      );
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${URL}`
      );
      setShortenedLink(response.data.result.short_link);
    } catch (e) {
      console.log(e);
    }
  };

  const logValue = async () => {
    try {
      const response = await axios.post("http://localhost:8888/url/link", {
        original: URL,
        short: JSON.stringify(shortenedLink),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Boginoo-Home">
      <div className="Header">
        <strong className="Usage">Хэрхэн ажилладаж вэ?</strong>
        <Greeting />
      </div>
      <div className="Body">
        <div className="Big-Logo">
          <img className="Logo" src={logo}></img>
          <div className="Title">Boginoo</div>
        </div>
        <div className="Link">
          {/* {sortenedLink} */}
          <input
            className="Link_input"
            placeholder="https://www.web-huudas.mn"
            onChange={handleInput}
          ></input>
          <button
            className="Link_button"
            onClick={() => {
              fetchData();
              // logValue();
            }}
          >
            Богиносгох
          </button>
        </div>
        <div className="headShort">
          <div className="ShortLink">{shortenedLink}</div>
          <div
            className="Save"
            onClick={() => {
              logValue();
              navigator.clipboard.writeText(shortenedLink);
            }}
          >
            Save & Copy
          </div>
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