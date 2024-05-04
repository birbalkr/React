
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
const [length, setLength]=useState(8)
const [number, setNumber]=useState(false)
const [charAllow, setCharAllow]=useState(false)
const [password, setPassword]=useState("")

const passwordref=useRef(null)

const PasswordGenerator = useCallback(() => {

  let pass=""
  let str = "qwertyuioplkjhgfdsazxcvbnmZXCVBNMLPOKIJUHYGTFRDESWAQ"
  if(number) str+="0123456789"
  if(charAllow) str+= "!@#$%^&*"

  for (let i = 0; i < length; i++) {
    let char = Math.floor(Math.random()*str.length+1)
    pass += str.charAt(char)
  }

  setPassword(pass)
},
[length,number,charAllow,setPassword])

const CopyPassword =useCallback(()=>{
  window.navigator.clipboard.writeText(password)
  passwordref.current?.select();
},[password])

useEffect(() =>{
  PasswordGenerator()
},[length,number,charAllow,PasswordGenerator])

  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-3 bg-gray-800 text-orange-500'>
    <h1 className='text-4xl text-center '>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type='text' value={password}  className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordref} />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={CopyPassword}>Copy</button>
    </div>
    <div className='flex text-sm gap-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={6} max={20} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/><label>Lenght: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input type="checkbox" defaultChecked={number}id='numberInput'  onChange={()=>{setNumber((prev)=>!prev)}}/><label>Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input type="checkbox" defaultChecked={number}id='numberInput'  onChange={()=>{setCharAllow((prev)=>!prev)}}/><label>Characters</label>
      </div>
    </div>
   </div>
  )
}

export default App
