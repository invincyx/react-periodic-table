import Element from "../Element"

export default function Lanthanides({ data }){
    return(
        <div className="">

            <div className="flex mt-4">
                <div className="w-1/2 grid grid-cols-9">
                    
                    <Element />
                    <Element  />
                    <Element elementData={data[56]} />
                    <Element elementData={data[57]} />
                    <Element elementData={data[58]} />
                    <Element elementData={data[59]} />
                    <Element elementData={data[60]} />
                    <Element elementData={data[61]} />
                    <Element elementData={data[62]} />

                </div>
                <div className="w-1/2  grid grid-cols-9">
                    <Element elementData={data[63]} />
                    <Element elementData={data[64]} />
                    <Element elementData={data[65]} />
                    
                    <Element elementData={data[66]} />
                    <Element elementData={data[67]} />
                    <Element elementData={data[68]} />
                    <Element elementData={data[69]} />
                    <Element elementData={data[70]} />
                    <Element />
                  
                </div>
            </div>
         
            
        </div>
    )
}