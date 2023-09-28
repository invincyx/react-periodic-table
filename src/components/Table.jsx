import FirstRow from "./rows/FirstRow"
import SecondRow from "./rows/SecondRow"
import data from '../data.json'
import ThirdRow from "./rows/ThirdRow"
import FourthRow from "./rows/FourthRow"
import FifthRow from "./rows/FifthRow"
import Modal from "./Modal"
import { useState, createContext } from "react"

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

      

        <div className="">
            <button onClick={toggleModal}>Open Modal</button>
            <Modal 
            open={open}
            toggleModal={toggleModal}
            modalData={modalData}
            />

            <FirstRow data={data.elements} />
            <SecondRow data={data.elements} />
            <ThirdRow data={data.elements} />
            <FourthRow  data={data.elements} />
            <FifthRow   data={data.elements} />
        </div>
        </ModalContext.Provider>
       
    )
}

export { ModalContext }