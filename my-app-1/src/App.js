import { Route, BrowserRouter, Routes } from "react-router-dom";
import Forgotpass from "./Pages/forgotpass"
import Signup from "./Pages/signup"
import Login from "./Pages/login";
import Home from "./Pages/home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Forgotpass" element={<Forgotpass />} />
            <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;