import { useContext } from "react"
import { ThemeContext } from "../App"
export default function Header({toggleDarkMode}){

const isDarkMode = useContext(ThemeContext)

// let fontColor =  isDarkMode ? " text-white": "text-gray-700"

    return (
        <div className="bg-slate-700">
                <div className="flex justify-around py-4 cursor-pointer">
                    <h1 className={`text-xl font-bold text-white`}>The Periodic Table of Elements</h1>
                     <p onClick={toggleDarkMode}>On</p>
                </div>
            
        </div>
    )

}