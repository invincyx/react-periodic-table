import Element from "../Element"

export default function ThirdRow({ data }){
    return(
        <div className="">

            <div className="flex">
                <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
                    <Element elementData={data[10]} />
                    <Element elementData={data[11]} />
                    <div className=""> </div>
                    
                    <div className=""> </div>
                    <div className=""> </div>
                    <div className="">  </div>
                    <div className="">  </div>
                    <div className=""> </div>
                    <div className="">  </div>

                </div>
                <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
                    <div className="">  </div>
                    <div className="">  </div>
                    <div className=""> </div>
                    
                    <Element elementData={data[12]} />
                    <Element elementData={data[13]} />
                    <Element elementData={data[14]} />
                    <Element elementData={data[15]} />
                    <Element elementData={data[16]} />
                    <Element elementData={data[17]} />
                    
                </div>
            </div>
         
            
        </div>
    )
}