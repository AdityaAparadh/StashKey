import SidebarBtn from "./SidebarBtn";

const Sidebar = ()=>{

    return(
        <div className=" mocha h-screen bg-mantle w-60 flex flex-col justify-start items-center pt-8">

<SidebarBtn text="Vault" />
<SidebarBtn text="Password Generator"/>
<SidebarBtn text="Breach Check"/>
<SidebarBtn text="Strength Anaylsis"/>
<SidebarBtn text="Account Settings"/>

        </div>
    )

}

export default Sidebar;