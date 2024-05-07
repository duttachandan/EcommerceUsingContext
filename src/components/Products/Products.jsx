import { useContext } from "react"
import { AppContext } from "../../Context/Store"
import { CiStar } from "react-icons/ci";

function Products() {
    const Data = useContext(AppContext);
    console.log(Data);
    //  const  = post;

    return (
        <div className="mt-[3rem]">
            <div className="h-[fit-content] 
            flex flex-row
            justify-center items-center 
            w-full gap-4 pt-5">
                <button>Men</button>
                <button>Women</button>
                <button>Electrical</button>
                <button>Jewelery</button>
            </div>
            <div
                className="flex h-[fit-content] 
            w-full justify-evenly items-center 
            flex-wrap px-5 gap-4 py-10 bg-slate-200">
                {
                    Data.map((post) => {
                        const { id, image, title, description, price } = post;
                        const SetWords = (str, num) => {
                            const words = str.split(" ");
                            return words.splice(0, num).join(" ")
                        }
                        const limitedTitle = SetWords(title, 4);

                        return (
                            <div
                                className="sm:basis-[23%] sm:min-w-[250px] 
                            w-full sm:h-[400px]
                            h-[150px]
                            px-[10px] py-[12px] 
                            border-[1px] border-[#cce7d0] 
                            rounded-2xl sm:shadow-lg
                            shadow-sm hover:shadow-black/20 gap-
                            overflow-y-hidden flex flex-row 
                            sm:flex-col justify-center 
                            items-center gap-2 sm:gap-0 bg-white
                            "
                                key={id}
                            >
                                <img
                                    className="sm:w-[90%] w-[50%] h-[100%] rounded-lg sm:h-[300px] 
                                object-contain px-5 aspect-[2/3]"
                                    src={image}
                                    alt="" />
                                <div className="flex flex-col w-50% sm:w-full justify-center items-end sm:items-start">
                                    <h1
                                        className="sm:text-xl text-sm font-semibold text-gray-700">
                                        {limitedTitle}
                                    </h1>
                                    <h4
                                        className="font-bold flex 
                                flex-row justify-start items-center">
                                        <CiStar />{post.rating.rate}
                                    </h4>
                                    <h3
                                        className="text-xl font-bold text-[#088178]">
                                        {`$${price}`}
                                    </h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products
