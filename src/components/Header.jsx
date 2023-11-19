import { useContext } from "react"
import { ThemeContext } from "../App"
import { DarkModeSwitch } from "react-toggle-dark-mode"


export default function Header({toggleDarkMode}){

const isDarkMode = useContext(ThemeContext)

let fontColor =  isDarkMode ? " text-white": "text-gray-700"

    return (
        <div className={ isDarkMode? `bg-slate-700 border-b border-slate-400`: `bg-slate-100 border-b border-slate-200` }>
                <div className="flex justify-around py-4 ">
                    <h1 className={`text-xl font-bold ${fontColor}`}>The Periodic Table of Elements</h1>
                    <span className="cursor-pointer">
                    <DarkModeSwitch
                        // style={{ marginBottom: '2rem' }}
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={30}
                        />
                    </span>
                    
                </div>
            
        </div>
    )

}