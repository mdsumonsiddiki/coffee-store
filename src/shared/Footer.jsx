import Logo from '../assets/logo1 1.svg'

const Footer = () => {
    return (
        <div className="bg-footer-texture pt-32">
            <div className='container mx-auto pb-14 flex items-start justify-between gap-12'>
                <div className='w-1/2'>
                    <img src={Logo} alt="" />
                    <h2 className='font-rancho text-5xl text-[#331A15] pt-6'>Espresso Emporium</h2>
                    <p className='text-xl text-[#1B1A1A] pt-8'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <ul className='flex py-8'>
                        <li>F</li>
                        <li>T</li>
                        <li>I</li>
                    </ul>
                    <h2 className='font-rancho text-5xl text-[#331A15] pb-8'>Get in Touch</h2>
                    <ul className='space-y-3'>
                        <li>+88 01533 333 333</li>
                        <li>info@gmail.com</li>
                        <li>72, Wall street, King Road, Dhaka</li>
                    </ul>
                </div>
                <div className='w-1/2'>
                    <h2 className='font-rancho text-5xl text-[#331A15] pb-8'>Connect with Us</h2>
                    <form className='space-y-6'>
                        <input className='py-4 px-3 text-xl w-full' type="text" placeholder='Name' />
                        <input className='py-4 px-3 text-xl w-full' type="email" placeholder='Email' />
                        <textarea className='w-full resize-none p-4 text-xl' placeholder='Message'></textarea>
                        <button className='font-rancho text-[#331A15] text-2xl border-2 border-[#331A15] py-3 px-5 rounded-full'>Send Message</button>
                    </form>

                </div>
            </div>
            <div className='bg-copyright text-center py-5'>
                <h2 className='font-rancho text-xl text-white'>Copyright Espresso Emporium ! All Rights Reserved</h2>
            </div>
        </div>
    );
};

export default Footer;