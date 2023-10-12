import FirstRow from "./rows/FirstRow"
import SecondRow from "./rows/SecondRow"
import data from '../data.json'
import ThirdRow from "./rows/ThirdRow"
import FourthRow from "./rows/FourthRow"
import FifthRow from "./rows/FifthRow"
import Modal from "./Modal"
import { useState, createContext } from "react"
import SixthRow from "./rows/SixthRow"
import SeventhhRow from "./rows/SeventhRow"
import Actinides from "./rows/Actinides"
import Lanthanides from "./rows/Lanthanides"

const ModalContext = createContext()

export default function Table(){
    const [open, setOpen] = useState(false)
    const [modalData, setModalData] = useState("")

    function toggleModal(element){
        
        setModalData(element)
        setOpen((prevState)=> !prevState)
    }


    return(
        <ModalContext.Provider value={toggleModal}>
        <div className="backdrop">
            <h1 className="text-3xl font-bold text-gray-700 pt-4">The Periodic Table of Elements</h1>
            <Modal 
            open={open}
            toggleModal={toggleModal}
            modalData={modalData}
            />

            <FirstRow data={data.elements} />
            <SecondRow data={data.elements} />
            <ThirdRow data={data.elements} />
            <FourthRow data={data.elements} />
            <FifthRow  data={data.elements} />
            <SixthRow data={data.elements} />
            <SeventhhRow data={data.elements} />
            <Lanthanides data={data.elements} />
            <Actinides data={data.elements} />

        </div>
        </ModalContext.Provider>
       
    )
}

export { ModalContext }