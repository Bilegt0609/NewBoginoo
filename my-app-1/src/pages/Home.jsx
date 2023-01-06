import React, {useEffect} from 'react';
import "../styles/Home.css";
import link from "../images/link.png"
import axios from "axios";
function App() {

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:8888/link")
      console.log(res.data)
    }
    getData()
  }, [])

  return (
    <div className='Body'>
        <div className='Body-Header'>
            <div className='Instruction'>Хэрхэн ажилладаж вэ?</div>
            <div className='LogIn'>Нэвтрэх</div>
        </div>
        <div className='Body-Body'>
            <img className='lin-img' src= {link} ></img>
            <div className='Title'>Boginoo</div>
            <div className='link'><input className='URL' placeholder='https://www.web-huudas.mn'></input><button className='URL-Button'>Богиносгох</button></div>
        </div>
        <div className='Body-Footer'>
          <div className='Made-By'>Made with ♥️ by Bilegt</div>
          <div className='Date'>©boginoo.io 2020</div>
        </div>
    </div>
  );
}

export default App;