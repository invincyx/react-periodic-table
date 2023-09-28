import Element from "../Element"
export default function FirstRow({ data }){
    
    console.log(data)
    return(
        <div className="">

            <div className="flex">
                <div className="w-1/2 grid grid-cols-9">
               
                    <Element elementData={data[0]} />
                    <div className="">  </div>
                    <div className=""> </div>
                    <div className=""> </div>
                    <div className=""> </div>
                    <div className="">  </div>
                    <div className="">  </div>
                    <div className=""> </div>
                    <div className="">  </div>

                </div>
                <div className="w-1/2  grid grid-cols-9">
                    <div className="">  </div>
                    <div className="">  </div>
                    <div className="">  </div>
                    <div className=""> </div>
                    <div className="">  </div>
                    <div className="">  </div>
                    <div className=""> </div>
                    <div className="">  </div>
                    <Element  elementData={data[1]} />
                   
                </div>
            </div>
         
            
        </div>
    )
}