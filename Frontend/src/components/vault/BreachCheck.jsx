import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

const BreachCheck = ()=>{

    const [password, setPassword] = useState('');
    const [ found, setFound ] = useState(0);
    const [searchState, setSearchState] = useState(false);

    async function digestMessage(message) {
        const msgUint8 = new TextEncoder().encode(message); 
        const hashBuffer = await window.crypto.subtle.digest("SHA-1", msgUint8); 
        const hashArray = Array.from(new Uint8Array(hashBuffer)); 
        const hashHex = hashArray
          .map((b) => b.toString(16).padStart(2, "0"))
          .join(""); 
        return hashHex;
      }

    const fetchAPI =  async ()=>{

        const hash = await digestMessage(password);
        const prefix = hash.substring(0,5);
        console.log(prefix);
        console.log(hash);
        setSearchState(true);
        fetch('https://api.pwnedpasswords.com/range/' + prefix)
        .then( response => response.text())
        .then( text => {
            const lines = text.split('\n');
            for(let i = 0; i < lines.length; i++){
                const [hashSuffix, count] = lines[i].split(':');
                if(hashSuffix.toLowerCase() === hash.substring(5)){
                    console.log(count);
                    setFound(count);
                    break;
                }else{
                    setFound(0);
                }
            }
            setSearchState(false);
        }).catch( err => {
            console.log(err);
        })
    }

    // useEffect( ()=>{
    //     console.log( fetchAPI('password') );
    // },[])
    const keyPressHandler = (e) =>{
        console.log(e.key)
        if(e.key === "Enter"){
            fetchAPI();
        }
    }   
    return(
        <div tabIndex={0} onKeyDown={ keyPressHandler } className="w-full h-full flex flex-col justify-center items-center text-white mocha bg-base">
            
            <input placeholder="Your Password"  value={password} onChange={(e)=>{ setPassword(e.target.value ) }} className="w-1/5 bg-surface0 h-8 rounded-md text-text flex justify-start items-center pl-2" >
            </input> 
            
            <button className='text-text p-1 rounded-sm m-5' onClick={ ()=>{ 
                fetchAPI()
            }} >
                <h4 className='bg-mauve w-32 h-8 rounded-md text-base flex items-center justify-center'>Check </h4>
            </button>
            {/* <div className="flex flex-col"> */}

            {searchState ? <div className='text-2xl'>Searching...</div> :<div className='mt-10 w-1/2 justify-center items-center flex flex-row text-5xl'>
                {"Found "} &nbsp; <div className={found ? "text-red font-bold" : "text-green font-bold"}  > { found } </div>&nbsp; {" Times"} 
                {/* { found ? <div className="text-lg" > It was found </div> : < div className="text-lg" > It wasnt found</div> } */}

            </div>}
            {/* </div> */}
        </div>
    )
}

export default BreachCheck;