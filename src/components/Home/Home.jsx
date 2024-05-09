import Cards from "./Cards"

function Home() {

    return (
        <>
            <div className="flex flex-col justify-center 
            items-start Home h-[90vh] 
            w-full bg-black/20
            bg-blend-darken mt-[3rem]">
                <div className="flex flex-col justify-center 
                items-start ps-10 gap-1">
                    <p
                        className="text-2xl text-gray-800 font-bold h-fit overflow-hidden">
                        Trade-in-offer
                    </p>
                    <h2
                        className="text-4xl font-bold overflow-hidden">
                        Super Value Deals
                    </h2>
                    <h1
                        className="text-5xl font-bold text-[#088178] overflow-hidden">
                        On all products
                    </h1>
                    <p
                        className="font-light text-gray-500 overflow-hidden">
                        save more with coupons & upto 70% off!
                    </p>
                    <button
                        id="btn"
                        className="py-[14px] px-[55px] 
                    text-[#088178] font-bold">
                        Shop Now
                    </button>
                </div>
            </div>
            <Cards/>
        </>


    )
}

export default Home
