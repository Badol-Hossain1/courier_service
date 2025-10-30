import logo from '../../../assets/Layer_1.png'
const Merchant = () => {
    return (
        <div data-aos="zoom-in">
            <div className="hero grid p-10  md:grid-cols-3 bg-[#03373D]">
                <div className="col-span-2">
                    <h1 className="font-bold mb-4 text-4xl">
                        Merchant and Customer Satisfaction is Our First Priority
                    </h1>
                    <p className="font-bold mb-4">
                        We offer the lowest delivery charge with the highest
                        value along with 100% safety of your product. Pathao
                        courier delivers your parcels in every corner of
                        Bangladesh right on time.
                    </p>
                    <div className="flex md:flex-row flex-col gap-6 ">
                        <button className=" hover:bg-[#CAEB66] font-bold border cursor-pointer  px-6 py-2 hover:text-black rounded-3xl">
                            Become a Merchant
                        </button>
                        <button className="border cursor-pointer font-bold px-6 py-2 hover:text-black hover:bg-[#CAEB66] rounded-3xl">
                            Earn with Profast Courier
                        </button>
                    </div>
                </div>
                <div className="col-span-1">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Merchant
