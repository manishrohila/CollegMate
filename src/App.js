import './App.css';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Desktop from './pages/Desktop';
import Courses from './pages/Courses';
import Course from './components/core/Courses/Course';
import Upload from './pages/Upload';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/dashboard' element={<Desktop/>}></Route>
        <Route path='/courses' element={<Courses/>}></Route>
        <Route path='/courses/:department' element={<Course/>}></Route>
        <Route path='/upload' element={<Upload/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>

      <Footer/>
    </>
  )
}