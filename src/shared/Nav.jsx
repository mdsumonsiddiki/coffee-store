import Logo from '../assets/logo1 1.svg'
const Nav = () => {
    return (
        <div className='py-3 flex items-center justify-center gap-2 bg-navBg'>
            <img src={Logo} alt="" />
            <h2 className='font-rancho text-5xl text-white'>Espresso Emporium</h2>
        </div>
    );
};

export default Nav;