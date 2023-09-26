import { useState } from 'react'
import './App.css'
import Table from './components/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Table />
    </>
  )
}

export default App
