import Banner from "../components/header/Banner";

import Products from "../components/products/Products";
import Service from "../components/service/Service";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Service/>
            <Products/>
        </div>
    );
};

export default Home;