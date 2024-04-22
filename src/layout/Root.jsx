import { Outlet } from "react-router-dom";
import Nav from "../shared/Nav";


const Root = () => {
    return (
        <div className="font-raleway">
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default Root;