import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/component/Header'
import Shop from './assets/component/Shop'
import Product from './assets/component/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Header></Header>
  <Shop/>
  <Product/>
    
   
  
    </div>
    
  
  )
}

export default App
