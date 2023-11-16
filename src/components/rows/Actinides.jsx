import Element from "../Element"

export default function Actinides({ data }){
    return(
        <div className="">

            <div className="flex">
                <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
                    
                    <Element />
                    <Element  />
                    <Element elementData={data[88]} />
                    <Element elementData={data[89]} />
                    <Element elementData={data[90]} />
                    <Element elementData={data[91]} />
                    <Element elementData={data[92]} />
                    <Element elementData={data[93]} />
                    <Element elementData={data[94]} />

                </div>
                <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
                    <Element elementData={data[95]} />
                    <Element elementData={data[96]} />
                    <Element elementData={data[97]} />
                    
                    <Element elementData={data[98]} />
                    <Element elementData={data[99]} />
                    <Element elementData={data[100]} />
                    <Element elementData={data[101]} />
                    <Element elementData={data[102]} />
                    <Element />
                  
                </div>
            </div>
         
            
        </div>
    )
}