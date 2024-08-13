import { useEffect, useState } from 'react';
import { FaRegCopy } from "react-icons/fa6";
import passwordGen from 'secure-random-password';




const PasswordGen = ()=>{
    
   const [ pass, setPass ] = useState('')
   const [capitalAllowed, setCapitalAllowed ] = useState(true)
   const [smallAllowed, setSmallAllowed ] = useState(true)
   const [numericAllowed, setNumericAllowed ] = useState(true)
   const [specialAllowed, setSpecialAllowed ] = useState(true)

   const keyPressHandler = (e) =>{
    console.log(e.key)
    if(e.key === "Enter"){
        generator(14);
    }
}

   const generator = (length )=>{

        let allowedArr = []
        if(capitalAllowed) { allowedArr.push( passwordGen.upper )}
        if(smallAllowed) { allowedArr.push( passwordGen.lower )}
        if(numericAllowed) { allowedArr.push( passwordGen.digits )}
        if(specialAllowed) { allowedArr.push( passwordGen.symbols )}
        console.log(allowedArr)
        setPass( passwordGen.randomPassword({length: length, characters: allowedArr }));
    }

    useEffect(()=>{
        generator(12, true, true, true, true)
    }, [] )

    
    return(
        <div tabIndex={0} onKeyDown={ keyPressHandler } className="Player w-full h-full flex flex-col justify-center items-center text-white mocha bg-base">
           <div className="w-1/5 bg-surface0 h-8 rounded-md text-text flex justify-start items-center pl-2" >
            <div className='w-5/6'>
            {pass}
            </div>
            <FaRegCopy className='text-text w-1/6 cursor-pointer' onClick={ ()=>{ navigator.clipboard.writeText(pass) } } />
            </div> 
            <div className='mt-5 w-1/2 justify-center items-center flex flex-row'>
            
            <input checked={numericAllowed} id='check-numeric' type='checkbox' className='accent-mauve m-2'  onChange={()=>{ setNumericAllowed(!numericAllowed) }} ></input><label onClick={()=>{ setNumericAllowed(!numericAllowed) }} htmlFor="check-numeric" >Numeric</label>            
            <input checked={capitalAllowed} id='check-capital' type='checkbox' className='accent-mauve m-2'  onChange={()=>{ setCapitalAllowed(!capitalAllowed) }} ></input><label onClick={()=>{setCapitalAllowed(!capitalAllowed)}} htmlFor="capital-numeric" >Uppercase</label>            
            <input checked={smallAllowed} id='check-small' type='checkbox' className='accent-mauve m-2'  onChange={()=>{ setSmallAllowed(!smallAllowed) }} ></input><label onClick={()=>{setSmallAllowed(!smallAllowed)}} htmlFor="small-numeric" >Lowercase</label>            
            <input checked={specialAllowed} id='check-special' type='checkbox' className='accent-mauve m-2'  onChange={()=>{ setSpecialAllowed(!specialAllowed) }} ></input><label onClick={()=>{setSpecialAllowed(!specialAllowed)}} htmlFor="special-numeric" >Special</label>          

            </div>
            
            <button className='text-text p-1 rounded-sm m-5' onClick={ ()=>{ 
                generator(14)
            }} >
                <h4 className='bg-mauve w-32 h-8 rounded-md text-base flex items-center justify-center'>Generate</h4>
            </button>

        </div>
    )

}

export default PasswordGen