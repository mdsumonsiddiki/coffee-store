
const AddCoffee = () => {
    return (
        <div className="bg-[#F4F3F0] py-20 px-28 mt-14 rounded-lg">
            <div className="text-center px-56 pb-14">
                <h2 className="text-[#374151] font-rancho text-5xl mb-5">Add New Coffee</h2>
                <p className="text-lg">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form className="grid grid-cols-2 gap-12">
                <div className="space-y-2">
                    <label className="text-[#1B1A1A] text-xl font-semibold" htmlFor="name">Name</label>
                    <input className='py-4 px-3 text-xl w-full' type="text" id="name" placeholder='Enter coffee name' />
                </div>
                <div className="space-y-2">
                    <label className="text-[#1B1A1A] text-xl font-semibold" htmlFor="chef">Chef</label>
                    <input className='py-4 px-3 text-xl w-full' type="text" id="chef" placeholder='Enter coffee chef' />
                </div>
                <div className="space-y-2">
                    <label className="text-[#1B1A1A] text-xl font-semibold" htmlFor="supplier">Supplier</label>
                    <input className='py-4 px-3 text-xl w-full' type="text" id="supplier" placeholder='Name' />
                </div>
                <div className="space-y-2">
                    <label className="text-[#1B1A1A] text-xl font-semibold" htmlFor="taste">Taste</label>
                    <input className='py-4 px-3 text-xl w-full' type="text" id="taste" placeholder='Enter coffee taste' />
                </div>
                <div className="space-y-2">
                    <label className="text-[#1B1A1A] text-xl font-semibold" htmlFor="category">Category</label>
                    <input className='py-4 px-3 text-xl w-full' type="text" id="category" placeholder='Enter coffee category' />
                </div>
                <div className="space-y-2">
                    <label className="text-[#1B1A1A] text-xl font-semibold" htmlFor="details">Details</label>
                    <input className='py-4 px-3 text-xl w-full' type="text" id="details" placeholder='Enter coffee details' />
                </div>
                <div className="space-y-2 col-span-2">
                    <label className="text-[#1B1A1A] text-xl font-semibold" htmlFor="photo">Photo</label>
                    <input className='py-4 px-3 text-xl w-full' type="text" id="photo" placeholder='Enter photo URL' />
                </div>
                <button className="w-full col-span-2 font-rancho rounded-md text-{#331A15} text-2xl bg-[#E3B577] border-2 border-[#331A15] px-5 py-2">Add Coffee</button>
            </form>
        </div>
    );
};

export default AddCoffee;