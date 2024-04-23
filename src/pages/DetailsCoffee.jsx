import coffee from '../assets/coffee.svg'
const DetailsCoffee = () => {
    return (
        <div className='bg-[#F5F4F1] py-20 mt-14 rounded-xl flex items-center justify-center gap-20'>
        <img className='h-96' src={coffee} alt="" />
        <div className='space-y-3'>
            <h2 className='font-rancho text-[#331A15] text-4xl mb-5'>Niceties</h2>
            <h2 className='text-[#1B1A1AB3] font-medium text-xl'><span className='text-[#1B1A1A] font-semibold'>Name :</span> Americano Coffee</h2>
            <h2 className='text-[#1B1A1AB3] font-medium text-xl'><span className='text-[#1B1A1A] font-semibold'>Chef :</span> Mr. Matin Paul</h2>
            <h2 className='text-[#1B1A1AB3] font-medium text-xl'><span className='text-[#1B1A1A] font-semibold'>Supplier :</span>  Cappu Authorizer</h2>
            <h2 className='text-[#1B1A1AB3] font-medium text-xl'><span className='text-[#1B1A1A] font-semibold'>Taste :</span>   Sweet and hot</h2>
            <h2 className='text-[#1B1A1AB3] font-medium text-xl'><span className='text-[#1B1A1A] font-semibold'>Category :</span>  Americano</h2>
            <h2 className='text-[#1B1A1AB3] font-medium text-xl'><span className='text-[#1B1A1A] font-semibold'>Details :</span>  Espresso with hot water</h2>
        </div>

    </div>
    );
};

export default DetailsCoffee;