import Element from "../Element"

export default function FourthRow({ data }){
    return(
        <div className="">

            <div className="flex">
                <div className="w-1/2 grid grid-cols-10">
                    <div className=""> </div>
                    <Element elementData={data[18]} />
                    <Element elementData={data[19]} />
                    <Element elementData={data[20]} />
                    <Element elementData={data[21]} />
                    <Element elementData={data[22]} />
                    <Element elementData={data[23]} />
                    <Element elementData={data[24]} />
                    <Element elementData={data[25]} />

                </div>
                <div className="w-1/2  grid grid-cols-10">
                    <Element elementData={data[26]} />
                    <Element elementData={data[27]} />
                    <Element elementData={data[28]} />
                    <Element elementData={data[29]} />
                    <Element elementData={data[30]} />
                    <Element elementData={data[31]} />
                    <Element elementData={data[32]} />
                    <Element elementData={data[33]} />
                    <Element elementData={data[34]} />
                    <div className=""> </div>
                </div>
            </div>
         
            
        </div>
    )
}