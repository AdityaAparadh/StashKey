import { AiOutlineProfile } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { LuKeyRound } from "react-icons/lu";
export default function Entry(){

    return(
        <div className="w-1/3 h-16 m-1 bg-surface0 rounded-md p-1 text-text flex items-center">

            <div className="rounded-full bg-overlay0 w-10 h-10 ml-4 flex items-center justify-center" >
                G
            </div>
            <div className="w-2/3 h-full flex flex-col justify-center ">
                <div className="ml-5 text-md">
                    Google
                </div>
                <div className="ml-5 text-xs">
                    abc@gmail.com
                </div>
            </div>
            <div className="flex flex-row justify-between items-center w-1/6 ">
            <FaRegUser className="w-1/4 cursor-pointer" />
            <LuKeyRound className="w-1/4 cursor-pointer"/>
            <AiOutlineProfile className="w-1/4 cursor-pointer" />
            </div>
        </div>


    )


}