
import SectionTitle from "../others/SectionTitle";
import btnIcon from '../../assets/icon/btnIcon.svg';
import Card from "./Card";
import left from '../../assets/left.svg';
import right from '../../assets/right.svg';

const Products = () => {
    return (
        <div className="relative my-20">
            <div className="container mx-auto">
                <SectionTitle subTitle='--- Sip & Savor ---' title='Our Popular Products' />
                <button className="flex mt-5 mx-auto font-rancho items-center gap-2 rounded-md text-white text-2xl bg-[#E3B577] border-2 border-[#331A15] px-5 py-2">Add Coffee <img src={btnIcon} alt="" /></button>
                <div className="mt-12 grid grid-cols-2 gap-6">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className="absolute top-0">
                <img src={left} alt="" />
            </div>
            <div className="absolute bottom-0 right-0">
                <img src={right} alt="" />
            </div>
        </div>
    );
};

export default Products;