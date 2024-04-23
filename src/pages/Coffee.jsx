import { Link, Outlet } from "react-router-dom";
import coffeeBg from '../assets/coffebg.svg';
import { GoArrowLeft } from "react-icons/go";
const Coffee = () => {
    return (
        <div className="relative">
            <div className="container mx-auto my-16 z-30">
            <Link to='/' className="text-[#374151] inline-block font-rancho text-3xl"><GoArrowLeft className="inline mr-7" />
                    Back to home</Link>
                <Outlet />
            </div>
            <div className="absolute top-0 -z-20">
                <img src={coffeeBg} alt="" />
            </div>
        </div>
    );
};

export default Coffee;