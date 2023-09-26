export default function Element({ elementData }){


    return(
        <div>
                {elementData && <div className="border border-black p-6"> 
                <h1 className="font-black" >{elementData.symbol} </h1>
                
                 </div>}
        </div>
       
    )
}