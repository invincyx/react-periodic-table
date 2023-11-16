import Element from "../Element"

export default function FifthRow({ data }){
    return(
        <div className="">

            <div className="flex">
                <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
                  
                    <Element elementData={data[36]} />
                    <Element elementData={data[37]} />
                    <Element elementData={data[38]} />
                    <Element elementData={data[39]} />
                    <Element elementData={data[40]} />
                    <Element elementData={data[41]} />
                    <Element elementData={data[42]} />
                    <Element elementData={data[43]} />
                    <Element elementData={data[44]} />
                </div>
                <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
                    
                    
                    <Element elementData={data[45]} />
                    <Element elementData={data[46]} />
                    <Element elementData={data[47]} />
                    <Element elementData={data[48]} />
                    <Element elementData={data[49]} />
                    <Element elementData={data[50]} />
                    <Element elementData={data[51]} />
                    <Element elementData={data[52]} />
                    <Element elementData={data[53]} />
                </div>
            </div>
         
            
        </div>
    )
}