import SidebarBtn from "./SidebarBtn";



const Sidebar = ()=>{

    return(
        <div className=" mocha h-screen bg-mantle w-60 flex flex-col justify-start items-center pt-8">

            <SidebarBtn text="Vault" switchto="core" />
            <SidebarBtn text="Password Generator" switchto="passgen" />
            <SidebarBtn text="Breach Check" switchto="breachcheck" />
            <SidebarBtn text="Strength Anaylsis"/>
            <SidebarBtn text="Account Settings"/>

        </div>
    )

}

export default Sidebar;