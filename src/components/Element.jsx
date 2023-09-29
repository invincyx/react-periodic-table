import { useContext } from "react"
import { ModalContext } from "./Table"

export default function Element({ elementData }){

    const {name, number, symbol, category, cpk_hex } = elementData
    const modalContext = useContext(ModalContext)

    let color = ""
    if(category === "noble gas") color = "purple"
    // if(category === "alkali metal") color = "blue"

    const style = {
        backgroundColor: cpk_hex ? `#${cpk_hex}`: "white"
    }


    return(
        <div 
       
        onClick={()=>modalContext(elementData)} 

        className={`bg-${color}-500 cursor-pointer hover:bg-gray-100 `}
        // style={style}
        >

                {elementData && <div className="border border-gray-500 py-4 m-0"> 
                    <p className={`text-xs text-${color}-100`}>{number}</p>
                    <h1 className="font-bold" >{symbol} </h1>
                    <p className="text-xs tracking-tighter">{name}</p>
                
                </div>}
        </div>
       
    )
}