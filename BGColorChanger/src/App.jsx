import { useState } from "react"

function App() {
  const [color,setColor] = useState("teal")
  return (
    <>
    <div className="w-full h-screen font-bold text-black" style={{backgroundColor: color}}>
      <div className="fixed inset-x-0 flex flex-wrap justify-center bottom-20">
        <div className="flex flex-wrap justify-center gap-5 px-3 py-2 bg-white rounded-full shadow-2xl cursor-pointer">
          <button 
          onClick={()=> setColor("red")}
          className="px-5 py-2 rounded-full shadow-2xl" style={{backgroundColor: "red"}}>red</button>
          <button onClick={()=> setColor("green")} className="px-5 py-2 rounded-full shadow-2xl" style={{backgroundColor: "green"}}>green</button>
          <button onClick={()=> setColor("blue")} className="px-5 py-2 rounded-full shadow-2xl" style={{backgroundColor: "blue"}}>blue</button>
          <button onClick={()=> setColor("yellow")} className="px-5 py-2 rounded-full shadow-2xl" style={{backgroundColor: "yellow"}}>yellow</button>
          <button onClick={()=> setColor("purple")} className="px-5 py-2 rounded-full shadow-2xl" style={{backgroundColor: "purple"}}>purple</button>
          <button onClick={()=> setColor("olive")} className="px-5 py-2 rounded-full shadow-2xl" style={{backgroundColor: "olive"}}>olive</button>
          <button onClick={()=> setColor("brown")} className="px-5 py-2 rounded-full shadow-2xl" style={{backgroundColor: "brown"}}>brown</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
