import logo from "../images/link.png";
import "../Styles/home.css";
import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {

    const [message, setMessage] = useState('');

    const [updated, setUpdated] = useState(message); 

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleClick = () => {
        setUpdated(message);
    };

    useEffect(() => {
        const getData = async () => {
          const res = await axios.get("http://localhost:8888/link")
          console.log(res.data)
        }
        getData()

        // const Post = async () => {
        //     const res = await axios.post("http://localhost:8888/post", {
        //         original: {updated}
        //     })

        // }
      }, [])

      const Post = async()=> {
        try {
          const res = await axios.post("http://localhost:8888/post", {
            original: {updated}
          })
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <div className="Boginoo-Home">
        <div className="Header">
            <strong className="Usage">Хэрхэн ажилладаж вэ?</strong>
            <a className="Login" href="/Login">Нэвтрэх</a>
        </div>
        <div className="Body">
            <div className="Big-Logo">
                <img className="Logo" src={logo}></img>
                <div className="Title">Boginoo</div>
            </div>
            <div className="Link">
                <input type="json" className="Link_input" placeholder="https://www.web-huudas.mn" onChange={handleChange} value={message}></input>
                <button className="Link_button" onClick={handleClick}>Богиносгох</button>
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