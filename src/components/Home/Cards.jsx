import { items } from "../../assets/Images"
import { CiStar } from 'react-icons/ci'
import { nanoid } from 'nanoid'

function Cards() {

    return (
        <div>
            <div
                className="flex h-[fit-content] 
            w-full justify-evenly items-center 
            flex-wrap px-5 py-10 bg-slate-200 gap-5">
                {
                    items.map((post) => {
                        const id = nanoid();
                        return (
                            <div
                                className="basis-[20%] min-w-[250px] 
                            w-full 
                            px-[10px] py-[5px] 
                            border-[1px] border-[#cce7d0] 
                            rounded-2xl shadow-lg
                            hover:shadow-black/20
                            flex flex-col gap-2 
                            bg-white
                            "
                                key={id}
                            >
                                <img
                                    className="w-[100%]
                                    object-cover px-2 py-2"
                                    src={post} alt="" />
                                <div className="flex flex-col w-full justify-center items-start">
                                    <h1 className='text-2xl text-slate-800 font-bold'>Printed T-shirt</h1>
                                    <h2 className='text-lg font-semibold'>Adidas</h2>
                                    <p className='text-xl flex flex-row items-center'>
                                        <CiStar />5
                                    </p>
                                    <h3
                                        className="text-xl font-bold text-[#088178]">
                                        $200
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

export default Cards
