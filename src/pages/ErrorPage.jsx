import { Link } from "react-router-dom";
import error from '../assets/404.svg'
import Nav from "../shared/Nav";
import Footer from "../shared/Footer";
import { GoArrowLeft } from "react-icons/go";

const ErrorPage = () => {
    return (
        <div>
            <Nav />
            <div className="text-center py-12">
                <Link to='/' className="text-[#374151] inline-block font-rancho text-3xl"><GoArrowLeft className="inline mr-7" />
                    Back to home</Link>
                <img className="mx-auto mt-8" src={error} alt="" />
            </div>
            <Footer />
        </div>
    );
};

export default ErrorPage;