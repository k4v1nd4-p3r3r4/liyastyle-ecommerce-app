import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Shop } from './components/common/Shop'
import { Home } from './components/common/Home'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
