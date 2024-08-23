import Entry from "./Entry"
import { MdOutlineSearch } from "react-icons/md";


const Core = () =>{
    return(


        <div className="p-10 w-full h-full flex flex-col justify-start items-center text-white mocha bg-base pb-4">
            
            <div className="mt-20 mb-10  w-1/3 h-12  flex flex-row justify-between items-center rounded-lg bg-surface1  text-text">

             <input placeholder="Search" className="rounded-lg pl-5 w-5/6 h-full bg-surface1  text-text ">
            </input> 
            <div className="w-1/6 flex justify-center items-center cursor-pointer">
            <MdOutlineSearch />
            </div>
           
            </div>

            <Entry />
            <Entry />
            <Entry />
            <Entry />
            <Entry />
            <Entry />
            <Entry />
            <Entry />

        </div>
    )

}

export default Core