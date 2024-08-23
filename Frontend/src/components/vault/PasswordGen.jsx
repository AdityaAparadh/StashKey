import { useEffect, useState } from 'react';
import { FaRegCopy } from "react-icons/fa6";
import passwordGen from 'secure-random-password';
import { FaCopy } from "react-icons/fa6";


const PasswordGen = ()=>{
    
   const [ pass, setPass ] = useState('')
   const [capitalAllowed, setCapitalAllowed ] = useState(true)
   const [smallAllowed, setSmallAllowed ] = useState(true)
   const [numericAllowed, setNumericAllowed ] = useState(true)
   const [specialAllowed, setSpecialAllowed ] = useState(true)
   const [ passLength, setPassLength ] = useState(14)

   const keyPressHandler = (e) =>{
    console.log(e.key)
    if(e.key === "Enter"){
        generator();
    }
}

   const generator = ( )=>{

        let allowedArr = []
        if(capitalAllowed) { allowedArr.push( passwordGen.upper )}
        if(smallAllowed) { allowedArr.push( passwordGen.lower )}
        if(numericAllowed) { allowedArr.push( passwordGen.digits )}
        if(specialAllowed) { allowedArr.push( passwordGen.symbols )}
        setPass( passwordGen.randomPassword({length: parseInt(passLength), characters: allowedArr }));
    }

    useEffect(()=>{
        generator(12, true, true, true, true)
    }, [] )

    const [ copied, setCopied ] = useState(false);
    const copier = ()=>{
        navigator.clipboard.writeText(pass)
        setCopied(true)
        setTimeout( ()=>{setCopied(false)} , 1000)
    }

    
    return(
        <div tabIndex={0} onKeyDown={ keyPressHandler } className="Player w-full h-full flex flex-col justify-center items-center text-white mocha bg-base">
           <div className="w-1/3 bg-surface0 h-12 rounded-md text-text flex justify-start items-center pl-2" >
            <div className='w-5/6 ml-3 '>
            {pass}
            </div>
            {
                copied ?  <FaCopy className='text-text w-1/6 ' /> : <FaRegCopy className='text-text w-1/6 cursor-pointer' onClick={ copier } /> 
            }
            </div> 
            <div className='mt-5 w-1/2 justify-center items-center flex flex-row'>
            <div className='flex flex-col'>
            <div className='flex flex-row'>
            {/* <input checked={numericAllowed} id='check-numeric' type='checkbox' className='accent-mauve m-2'  onChange={()=>{ setNumericAllowed(!numericAllowed);generator() }} ></input><label onClick={()=>{ setNumericAllowed(!numericAllowed);generator() }} htmlFor="check-numeric" >Numeric</label>            
            <input checked={capitalAllowed} id='check-capital' type='checkbox' className='accent-mauve m-2'  onChange={()=>{ setCapitalAllowed(!capitalAllowed);generator() }} ></input><label onClick={()=>{setCapitalAllowed(!capitalAllowed);generator()}} htmlFor="capital-numeric" >Uppercase</label>            
            <input checked={smallAllowed} id='check-small' type='checkbox' className='accent-mauve m-2'  onChange={()=>{ setSmallAllowed(!smallAllowed);generator() }} ></input><label onClick={()=>{setSmallAllowed(!smallAllowed);generator()}} htmlFor="small-numeric" >Lowercase</label>            
            <input checked={specialAllowed} id='check-special' type='checkbox' className='accent-mauve m-2'  onChange={()=>{ setSpecialAllowed(!specialAllowed);generator() }} ></input><label onClick={()=>{setSpecialAllowed(!specialAllowed);generator()}} htmlFor="special-numeric" >Special</label>           */}
            <input checked={numericAllowed} id='check-numeric' type='checkbox' className='accent-mauve m-2' onChange={()=>{ setNumericAllowed(!numericAllowed); }} />
            <label htmlFor="check-numeric">Numeric</label>

            <input checked={capitalAllowed} id='check-capital' type='checkbox' className='accent-mauve m-2' onChange={()=>{ setCapitalAllowed(!capitalAllowed); }} />
            <label htmlFor="check-capital">Uppercase</label>

            <input checked={smallAllowed} id='check-small' type='checkbox' className='accent-mauve m-2' onChange={()=>{ setSmallAllowed(!smallAllowed); }} />
            <label htmlFor="check-small">Lowercase</label>

            <input checked={specialAllowed} id='check-special' type='checkbox' className='accent-mauve m-2' onChange={()=>{ setSpecialAllowed(!specialAllowed); }} />
            <label htmlFor="check-special">Special</label>
            </div>
            
            <input type='range' min={4} max={40} value={passLength} onChange={(e)=>{setPassLength(e.target.value);generator()}} id='pass-len' className='accent-mauve' ></input><label htmlFor='pass-len'>Length - {passLength}</label>
            </div>
            </div>
            
            <button className='text-text p-1 rounded-lg m-5 bg-mauve' disabled={!capitalAllowed && !smallAllowed && !numericAllowed && !specialAllowed }  onClick={ ()=>{ 
                generator()
            }} >
                <h4 className='w-32 h-8 rounded-md text-base flex items-center justify-center'>Generate</h4>
            </button>

        </div>
    )

}
// disabled={!capitalAllowed && !smallAllowed && !numericAllowed && !specialAllowed } 
//  (!capitalAllowed && !smallAllowed && !numericAllowed && !specialAllowed ) ? 'bg-text':'bg-mauve'
export default PasswordGen