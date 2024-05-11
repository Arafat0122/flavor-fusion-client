import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="bg-[#131E3A] h-screen content-center">
            <div className="space-y-6">
                <div className="w-full">
                    <img className="mx-auto" src="https://i.ibb.co/0nZNkyH/404a.png" alt="" />
                </div>
                <h1 className="text-[#FB8200] text-7xl font-bold text-center">Error</h1>
                <h3 className="text-[#F83B00] text-5xl text-center">Page Not Found</h3>
                <div className="text-center">
                    <Link to={'/'} className="btn btn-outline text-[#FEE236] text-xl text-center hover:bg-[#ccbc51]">Return Home Page</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;