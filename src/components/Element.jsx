import { useContext } from "react"
import { ModalContext } from "./Table"

export default function Element({ elementData }){

    const { number, symbol, category } = elementData
    const modalContext = useContext(ModalContext)

    let color = "bg-white"
    if(category === "noble gas") color = "purple"
    if(category === "alkali metal") color = "blue"


    return(
        <div 
        onClick={()=>modalContext(elementData)} 

        className={`bg-${color}-500 cursor-pointer hover:bg-violet-600`}>

                {elementData && <div className="border border-black p-6"> 
                    <p className={`text-xs text-${color}-100`}>{number}</p>
                    <h1 className="font-bold" >{symbol} </h1>
                
                </div>}
        </div>
       
    )
}