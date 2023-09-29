import Element from "../Element"

export default function SeventhhRow({ data }){
    return(
        <div className="">

            <div className="flex">
                <div className="w-1/2 grid grid-cols-9">
                  
                    <Element elementData={data[86]} />
                    <Element elementData={data[87]} />
                    <Element 
                        series="anthanides" 
                        from="57-71"
                    />
                    <Element elementData={data[103]} />
                    <Element elementData={data[104]} />
                    <Element elementData={data[105]} />
                    <Element elementData={data[106]} />
                    <Element elementData={data[107]} />
                    <Element elementData={data[108]} />
                    
                </div>
                <div className="w-1/2  grid grid-cols-9">
                    
                    <Element elementData={data[109]} />
                    <Element elementData={data[110]} />
                    <Element elementData={data[111]} />
                    <Element elementData={data[112]} />
                    <Element elementData={data[113]} />
                    <Element elementData={data[114]} />
                    <Element elementData={data[115]} />
                    <Element elementData={data[116]} />
                    <Element elementData={data[117]} />
                    
                </div>
            </div>
         
            
        </div>
    )
}