import { vaultContext } from "../Vault";
import { useContext } from "react";
const SidebarBtn = (props) =>{

    const vContext = useContext(vaultContext);

    return(
        
        <div onClick={ (e)=>{ vContext.setVaultPage(props.switchto) } } className="w-3/4 h-12 m-2 bg-mantle cursor-pointer rounded-md flex items-center justify-center text-text" >
            {props.text}
        </div>

    )

}

export default SidebarBtn;