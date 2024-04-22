import SectionTitle from "../others/SectionTitle";
import insta from '../../assets/insta.svg'
const Social = () => {
    return (
        <div className="container mx-auto pb-16">
            <SectionTitle subTitle='Follow Us Now' title='Follow on Instagram' />
            <div className="pt-14 grid grid-cols-4 gap-6">
                <img className="w-full object-cover" src={insta} alt="" />
                <img className="w-full object-cover" src={insta} alt="" />
                <img className="w-full object-cover" src={insta} alt="" />
                <img className="w-full object-cover" src={insta} alt="" />
                <img className="w-full object-cover" src={insta} alt="" />
                <img className="w-full object-cover" src={insta} alt="" />
                <img className="w-full object-cover" src={insta} alt="" />
                <img className="w-full object-cover" src={insta} alt="" />
            </div>
        </div>
    );
};

export default Social;