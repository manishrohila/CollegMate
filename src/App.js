import './App.css';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Desktop from './pages/Desktop';

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/dashboard' element={<Desktop/>}></Route>
      </Routes>

      <Footer/>
    </>
  )
}