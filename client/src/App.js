import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import Layout from './Layout/Layout';
import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import Programs from './pages/Programs/Programs';

function App() {
  return (
    <>
     <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/programs" element={<Programs/>} />
            </Route>
            
          </Routes>
    
    </>
  );
}

export default App;
