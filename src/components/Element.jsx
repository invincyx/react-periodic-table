import { useContext } from "react"
import { ModalContext } from "./Table"

export default function Element({ elementData, series, from }){

    const modalContext = useContext(ModalContext)

    return(
        <div 
       
        onClick={()=> elementData?  modalContext(elementData): console.log('no modal will be shown')} 

        className={` cursor-pointer hover:bg-gray-100 `}
        // style={style}
        >
            {from && <div className="border border-gray-500 py-4 m-0"> 
                    <h1 className="font-bold" >{from} </h1>
                    <p className="text-xs tracking-tighter">{series}</p>
                
                </div>}    

                {elementData && <div className="border border-gray-500 py-4 m-0"> 
                    <p className={`text-xs text-${elementData.color}-100`}>{elementData.number}</p>
                    <h1 className="font-bold" >{elementData.symbol} </h1>
                    <p className="text-xs tracking-tighter">{name}</p>
                
                </div>}
        </div>
       
    )
}