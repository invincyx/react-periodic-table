import { useState } from 'react'
import './App.css'
import Table from './components/Table'
import Header from './components/Header'
import { createContext } from 'react'

const ThemeContext = createContext()

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)

function toggleDarkMode(){
    setIsDarkMode(prevState=> !prevState)
}

let bgColor = isDarkMode ? "bg-slate-800" : "bg-white"
  return (
    <ThemeContext.Provider value={isDarkMode}>
      <div className={`${bgColor} `}>
 
          <Header 
            toggleDarkMode={toggleDarkMode} />
          <Table />

      </div>
     
    

    </ThemeContext.Provider>
   
  )
}

export default App
export { ThemeContext }
