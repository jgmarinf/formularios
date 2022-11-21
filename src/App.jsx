import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import FormControlate from './components/FormControlate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FormControlate/>
    </div>
  )
}

export default App
