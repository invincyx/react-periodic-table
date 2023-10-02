import { useContext, useState } from "react"
import { ModalContext } from "./Table"

export default function Element({ elementData, series, from }){
    const modalContext = useContext(ModalContext)


    let color = "white"
    if (elementData && elementData.category === "alkaline earth metal") color="#f97927"
    if (elementData && elementData.category === "alkali metal") color = "#fdc235"
    if (elementData && elementData.category === "transition metal") color = "#2685c1"
    if (elementData && elementData.category === "post-transition metal") color = "#263d51"
    if (elementData && elementData.category === "polyatomic nonmetal") color = "#ea2d59"
    if (elementData && elementData.category === "noble gas") color = "#8b58ad"
    if (elementData && elementData.category === "diatomic nonmetal") color = "#4caed4"
    if (elementData && elementData.category === "metalloid") color = "#769191"
    if (elementData && elementData.category === "unknown, probably post-transition metal") color = "#f542da"
    if (elementData && elementData.category === "unknown, probably transition metal") color = "#c5f542"
    if (elementData && elementData.category === "unknown, probably metalloid") color = "#ffd4f7"
    if (elementData && elementData.category === "unknown, predicted to be noble gas") color = "#d5a6bd"
    if (elementData && elementData.category === "lanthanide") color = "#ff4b34"
    if (elementData && elementData.category === "actinide") color = "#54bd4a"
    if (from && series === "Lanthanides") color = "#ff4b34"
    if (from && series === "Actinides") color = "#54bd4a"
    

    const style = {
        backgroundColor: color,
        // color: 'white'
    }

    

    return(
        <div 
       
        onClick={()=> elementData?  modalContext(elementData): console.log('no modal will be shown')} 

        className={`bg-${color}-900 cursor-pointer hover:bg-gray-100 `}
        style={style}
        >
            {from && <div className="border border-white py-6 m-0"> 
                    <h1 className="font-bold text-white" >{from} </h1>
                    <p className="text-xs tracking-tighter text-white">{series}</p>
                
                </div>}    

                {elementData && <div className="border border-gray-100 py-4 m-0"> 
                    <p className={`text-xs text-white`}>{elementData.number}</p>
                    <h1 className="font-bold text-white" >{elementData.symbol} </h1>
                    <p className="text-xs tracking-tighter text-white">{elementData.name}</p>
                
                </div>}
        </div>
       
    )
}