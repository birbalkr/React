
import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  const [color, setColor]=useState("olive")

  // let [value, setValue] = useState(15)

  // // let value=5
  // const AddValue=()=>{
  //   value = value+1
  //   setValue(value)
  // }
  // const removeVale=()=>{
  //   value=value-1
  //   setValue(value)
  // }

  return (
    
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-warp justify-center bottom-12 inset-x-0'>
        <div className='fixed flex flex-warp justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-white'>
            <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"red"}}>Red</button>
            <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"green"}}>Green</button>
            <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"black"}}>Black</button>
            <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"yellow"}}>Yellow</button>
            <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"Blue"}}>Blue</button>

        </div>
        </div>
      </div>

    
  )
}

export default App
