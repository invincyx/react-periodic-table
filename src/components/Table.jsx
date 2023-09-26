import FirstRow from "./rows/FirstRow"
import SecondRow from "./rows/SecondRow"
import data from '../data.json'
import ThirdRow from "./rows/ThirdRow"
import FourthRow from "./rows/FourthRow"

export default function Table(){


    return(
        <div className="">
            <FirstRow data={data.elements} />
            <SecondRow data={data.elements} />
            <ThirdRow data={data.elements} />
            <FourthRow  data={data.elements} />
        </div>
       
    )
}