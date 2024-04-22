import coffee from '../../assets/coffee.svg';
import eye from '../../assets/icon/eye.svg';
import pen from '../../assets/icon/pen.svg';
import deletes from '../../assets/icon/delete.svg';

const Card = () => {
    return (
        <div className='bg-[#F5F4F1] p-8 rounded-xl flex items-center justify-between'>
            <img src={coffee} alt="" />
            <div className='space-y-3'>
                <h2 className='text-[#1B1A1AB3] font-medium text-xl'><span className='text-[#1B1A1A] font-semibold'>Name :</span> Americano Coffee</h2>
                <h2 className='text-[#1B1A1AB3] font-medium text-xl'><span className='text-[#1B1A1A] font-semibold'>Chef :</span> Mr. Matin Paul</h2>
                <h2 className='text-[#1B1A1AB3] font-medium text-xl'><span className='text-[#1B1A1A] font-semibold'>Price :</span>  890 Taka</h2>
            </div>
            <div className="join join-vertical space-y-3 pr-8">
                <button className="bg-[#D2B48C] p-3 rounded-md">
                    <img src={eye} alt="" />
                </button>
                <button className="bg-[#3C393B] p-3 rounded-md">
                    <img src={pen} alt="" />
                </button>
                <button className="bg-[#EA4744] p-3 rounded-md">
                    <img src={deletes} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Card;