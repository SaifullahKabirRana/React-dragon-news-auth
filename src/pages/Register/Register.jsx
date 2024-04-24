import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // create user
        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-12 md:mt-28 bg-[#F3F3F3] pt-7 md:pt-16 pb-7 md:pb-16 rounded-md md:max-w-[750px] mx-auto">
                <h2 className="text-[#403F3F] text-[22px] md:text-[30px] text-center font-semibold">Register your account</h2>
                <div className="md:w-3/4 mx-auto">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#403F3F] font-semibold text-xl">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#403F3F] font-semibold text-xl">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URl" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#403F3F] font-semibold text-xl">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#403F3F] font-semibold text-xl">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-[14px]">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#403F3F] text-white text-xl font-semibold">Register</button>
                        </div>
                    </form>
                    <p className="text-center text-[#706F6F] text-[16px] font-semibold">Already have an account? <Link to='/login' className="bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] inline-block text-transparent bg-clip-text">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;