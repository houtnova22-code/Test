import {useState } from "react"

export default function State() {
    
    const [number ,setNumber ,number1, setNumber1] = useState(0)
  return (

    <div >
        <h1 className="text-3xl">{number} </h1>
        <button className="bg-slate-500 " onClick={()=> setNumber(number+10)}>+10</button>



        <h1 className="text-3xl">{number1} </h1>
        <button className="bg-slate-500 " onClick={()=> setNumber(number1-10)}>-10</button>


    </div>




   
    
   
  )
}
