import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useRef } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {login,resetPassword}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const emailRef=useRef()
    const handleLogin=e=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        login(email,password)
        .then(result=>{
            console.log(result.user)
            if(result.user){
                toast.success("Login Successfull")
            }
            navigate(location?.state?location.state:"/")
        })
        .catch(error=>{
            console.log(error.message)
        })

    }
    const handleResetPass=e=>{
        const email=emailRef.current.value;
        if(!email){
            alert('Please Provide an Email')
            return
        }
        else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            alert('Please Write a valid email')
            return
        }
            
        // send validation email
        resetPassword(email)
        .then(()=>{
            toast.success('Please Check Your Email')
        })
        .catch()
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-5xl font-bold text-center p-4">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                ref={emailRef}
                                 type="email" name="email"
                                 placeholder="email" 
                                 className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a onClick={handleResetPass} className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                           <p>Do not have account? Please <Link to="/signup" className="text-cyan-400 font-bold">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;