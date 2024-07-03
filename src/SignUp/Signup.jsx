import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
    const {user,setUser,createUser,updateUserProfile}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleRegister=async e=>{
            e.preventDefault()
            const form=e.target;
            const name=form.name.value;
            const profile=form.profile.value;
            const email=form.email.value;
            const password=form.password.value;
            try{
                const result=await createUser(email,password,name,profile)
                await updateUserProfile(name,profile)
                setUser({...user,photoURL:profile,displayName:name})
                navigate('/')
                toast.success("Sign in Success")
            }
            catch (err){
                console.log(err)
                toast.err(err?.message)
            }

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-4xl font-bold text-center p-4">Signup now!</h1>
                        <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile</span>
                                </label>
                                <input type="text" name="profile" placeholder="Profile" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Signup</button>
                            </div>
                            <p>Already have an Account? Please <Link to="/login" className="text-cyan-400 font-bold">Login</Link></p>
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Signup;