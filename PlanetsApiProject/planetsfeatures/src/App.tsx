import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Home from './pages/home/Home'
import Form from './pages/form/Form'

function App() {

  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<Home />}></Route>
            <Route path='/form' element={<Form />}></Route>
            <Route path='/display' element={<Home />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
