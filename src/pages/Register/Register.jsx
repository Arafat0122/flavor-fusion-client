import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)

        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');

        if (password.length < 6) {
            toast.error('Password should be at least 6 characters or longer', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should have at least one uppercase characters.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Your password should have at least one lowercase characters.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }


        createUser(email, password, name, photo)
            .then(() => {
                // new user
                const user = { email };
                fetch('https://explore-nest-server-seven.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })

                navigate('/');
                toast.success('User registered successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch(error => {
                toast.error(`${error}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    }

    return (
        <div>
            <Helmet>
                <title>FlavorFusion | Register</title>
            </Helmet>
            <div className="flex bg-[url('https://img.freepik.com/free-photo/top-view-asian-noodles-with-eggs-copy-space_23-2148694340.jpg?t=st=1715683087~exp=1715686687~hmac=d555882d53a83cd7f6f9075d883a443d9083f7151ab10469e1c3f182de6d8942&w=1380')] bg-center lg:bg-cover p-4">
                <div className="lg:w-4/5">
                    
                </div>
                <div className="w-full rounded-md shadow sm:p-8 text-gray-800 animate__animated animate__zoomIn">
                    <h2 className="mb-3 text-3xl font-bold text-white text-center">Register your account</h2>
                    <form onSubmit={handleRegister} className="space-y-8">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-white">Name</label>
                                <input type="text" name="name" placeholder="Your name" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-white">Email address:</label>
                                <input type="email" name="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-white">Photo URL</label>
                                <input type="text" name="photo" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                            </div>
                            <div className="space-y-2 relative">
                                <div className="">
                                    <label htmlFor="password" className="text-sm font-medium text-white">Password</label>
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                                <span
                                    className="absolute top-9 right-3"
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash className="text-2xl"></FaEyeSlash> : <FaEye className="text-2xl"></FaEye>
                                    }

                                </span>
                            </div>
                        </div>
                        <button className="w-full px-8 py-3 font-semibold rounded-md bg-gradient-to-l from-[#46cadb] to-[#6887dd] text-gray-50">Submit</button>
                    </form>
                    <p className="text-sm text-center font-medium text-white bg-[#1111115e] w-fit mx-auto p-2 rounded-xl mt-10">Already have account?
                        <Link to={'/login'} className="focus:underline hover:underline"> Login here</Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Register;