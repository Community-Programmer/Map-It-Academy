import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
import About from "./pages/About/About";
import Courses from "./pages/Courses/Courses";
import Programs from "./pages/Programs/Programs";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/SignUp/Signup";
import Profile from "./pages/Profile/Profile";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
