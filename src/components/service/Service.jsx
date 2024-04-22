import Icon1 from '../../assets/icon/1 1.svg'
import Icon2 from '../../assets/icon/2 1.svg'
import Icon3 from '../../assets/icon/3 1.svg'
import Icon4 from '../../assets/icon/4 1.svg'
const Service = () => {
    return (
        <div className="bg-[#ECEAE3] py-14">
            <div className='container mx-auto flex items-start justify-between gap-12'>
                <div>
                    <img src={Icon1} alt="" />
                    <h2 className='text-[#331A15] font-rancho text-4xl pt-4'>Awesome Aroma</h2>
                    <p className='text-[#1B1A1A] pb-2'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img src={Icon2} alt="" />
                    <h2 className='text-[#331A15] font-rancho text-4xl pt-4'>High Quality</h2>
                    <p className='text-[#1B1A1A] pt-2'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div>
                    <img src={Icon3} alt="" />
                    <h2 className='text-[#331A15] font-rancho text-4xl pt-4'>Pure Grades</h2>
                    <p className='text-[#1B1A1A] pt-2'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div>
                    <img src={Icon4} alt="" />
                    <h2 className='text-[#331A15] font-rancho text-4xl pt-4'>Proper Roasting</h2>
                    <p className='text-[#1B1A1A] pt-2'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Service;