import logo from "../images/link.png";
import "../styles/History.css";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const History = () => {
  const [URL, setURL] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:8888/url/url")
      setURL(response.data.data)
    }
    getData()
  }, [])

  // const items = [...Array(100)].map((val, i) => `${i} ${URL[0]}`);
  const items = [...Array(100)].map((val, i) => {
    return (
      <div className="Itemlist">{i}</div>
    );
  });

  console.log(URL)

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
        <div className="HistoryList">
          <ul>
            {items.map((item, i) => (
              <li key={`item_${i}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="Footer">
        <div className="Made">Made with ♥️ by Nest Academy</div>
        <div className="Date">©boginoo.io 2020</div>
      </div>
    </div>
  );
};
export default History;
