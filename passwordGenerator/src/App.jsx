import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState("flase");
  const [character, setcharacter] = useState("false");
  const [password, setpassword] = useState("");

  const passGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    //assigning number and characters
    if(number) str += "0123456789";
    if(character) str += "!@#$%^&*()_+-=;'[],./";
    
    //generating password
    for (let i = 0; i <=length; i++) {

      //to get random index to generate random pass
      let char = (Math.random() *str.length);
      pass += str.charAt(char);
    }

    setpassword(pass)
    
  },[length, number, character, setpassword]);
  
  //useRef hook
  const passwordRef = useRef(null)

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passGenerator()},[length, number, character, setpassword]);

  return (
    <>
      <div className='w-full max-w-md px-5 py-2 mx-auto text-orange-500 bg-gray-700 rounded-lg'>
        <h1 className='mb-3 text-lg text-white'>Password Generator</h1>
        <div className='flex mb-5 overflow-hidden rounded-lg'>
        <input type="text" value={password} placeholder='password' className='w-full px-3 py-1 outline-none' readOnly ref={passwordRef} />
        <button className='bg-blue-600 outline-none shrink-0 py-0.5 px-3 text-white'
        onClick={copyToClipboard}>Copy</button>
        </div>

        <div className='flex gap-5 text-sm'>
          <div className='flex items-center gap-x-2'>
            <input type="range" min={6} max={30} value={length} className='outline-none cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}/>
            <label className='-mt-1'>length:{length}</label>
          </div>

          <div className='flex items-center gap-x-2'>
            <input type="checkbox" defaultChecked={number} id="numberInput" 
            onChange={()=>{setnumber((prev) => !prev)}}/>
            <label htmlFor="numberInput" className='-mt-1 cursor-pointer'>Number</label>
          </div>

          <div className='flex items-center gap-x-2'>
            <input type="checkbox" defaultChecked={character} id="characterInput" 
            onChange={()=>{setcharacter((prev) => !prev)}}/>
            <label htmlFor="characterInput" className='-mt-1 cursor-pointer'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
