import { useEffect, useState } from 'react';

import passwordGen from 'secure-random-password';




const PasswordGen = ()=>{
    
   const [ pass, setPass ] = useState('')
    const generator = (length, capitalAllowed, smallAllowed, numericAllowed, specialAllowed )=>{

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
    },[])
    return(
        <div className="w-full h-full flex flex-col justify-center items-center text-white mocha bg-base">
           <div className="w-1/5 bg-surface0 h-8 rounded-md text-text flex justify-start items-center pl-2" >
            {pass}
            </div> 
            <button className='text-text p-1 rounded-sm m-5' onClick={ ()=>{
                generator(14,true,true,true,true)
            }} >
                <h4 className='bg-mauve w-32 h-8 rounded-md text-base flex items-center justify-center'>Generate</h4>
            </button>
        </div>
    )

}

export default PasswordGen