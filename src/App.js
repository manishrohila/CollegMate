import './App.css';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Desktop from './pages/Desktop';
import Courses from './pages/Courses';
import Course from './components/core/Courses/Course';
import Upload from './pages/Upload';
import Contact from './pages/Contact';
import { useDispatch } from 'react-redux';
import OpenRoute from './components/core/Auth/OpenRoute';
import PrivateRoute from './components/core/Auth/PrivateRoute';
import Error from './pages/Error';
import { useEffect } from 'react';
import { getUserDetails } from './services/operations/profileAPI';
import SubjectNotes from "../src/components/core/Courses/SubjectNotes"
export default function App() {

  // const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (


    <>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />}></Route>

        <Route path='/login' element={
          <OpenRoute>
            <Login />
          </OpenRoute>
        }> </Route>


        <Route path='/signup' element={<OpenRoute>
          <Signup />
        </OpenRoute>}></Route>


        <Route path='/dashboard' element={
          <PrivateRoute>
            <Desktop />
          </PrivateRoute>
        }></Route>

        <Route path='/courses' element={<Courses />}></Route>

        <Route path='/courses/:Department' element={
          <PrivateRoute>
            <Course />
          </PrivateRoute>
        }></Route>

        <Route path='/courses/:Department/subjectNotes/:subjectName' element={
          <PrivateRoute>
            <SubjectNotes/>
          </PrivateRoute>
        }></Route>
        <Route path='/upload' element={
          <PrivateRoute>
            <Upload />
          </PrivateRoute>
        }></Route>

        <Route path='/contact' element={<Contact />}></Route>

        <Route path="*" element={<Error />} />
      </Routes>


      <Footer />
    </>
  )
}