import Banner from "../components/header/Banner";

import Products from "../components/products/Products";
import Service from "../components/service/Service";
import Social from "../components/social/Social";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Service/>
            <Products/>
            <Social/>
        </div>
    );
};

export default Home;