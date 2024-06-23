import {toast }from "react-hot-toast";
import { apiConnector } from "../apiConnector"
import { setLoading, setToken } from "../../slices/authSlice"
import { endpoints } from "../apis";

const { LOGIN_API,SIGNUP_API} = endpoints

export function signUp (
    firstName,
    lastName,
    email,
    password,
    navigate
){
    return async (dispatch)=>{
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try{
            const response = await apiConnector("POST",SIGNUP_API,{
                firstName,
                lastName,
                email,
                password,
            })
            console.log("Sign up Api response.......",response);
            if (!response.data.success) {
                throw new Error(response.data.message)
              }
              toast.success("Signup Successful")
              navigate("/login");
        }
        catch(error){
            console.log("SIGN UP API ERROR ...",error.message);
            toast.error("SIGNUP FAILED")
            navigate("/signup");
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function login(email, password, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", LOGIN_API, {
          email,
          password,
        })
  
        console.log("LOGIN API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("Login Successful")
        dispatch(setToken(response.data.token))
        
        localStorage.setItem("token", JSON.stringify(response.data.token))
        navigate("/dashboard/my-profile")
      } catch (error) {
        console.log("LOGIN API ERROR............", error)
        toast.error("Login Failed")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }