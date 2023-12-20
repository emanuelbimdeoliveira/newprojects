import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

// iterface
import { ITask } from './interfaces/ITask'

import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'

import Home from "./pages/home/Home"
import About from "./pages/about/About"
import TaskEdit from './components/taskeditandview/TaskEdit'
import TaskView from './components/taskeditandview/TaskView'

function App() {  
  const localStorageData: string | null = localStorage.getItem("tasksOfToDoListWithTsAndReact");

  const createLocalStorageItem = () => {
    localStorage.setItem("tasksOfToDoListWithTsAndReact", "[]");
  }

  const tasksFromLocalStorage: ITask[] = localStorageData ? JSON.parse(localStorageData) : createLocalStorageItem();


  const [tasks, setTasks] = useState<ITask[]>(tasksFromLocalStorage);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main>
          <section>
            <Routes>
              <Route path='/' element={<Home tasks={tasks} setTasks={setTasks} />}></Route>
              <Route path='/edit/:id' element={<TaskEdit tasks={tasks} setTasks={setTasks} />}></Route>
              <Route path='/view/:id' element={<TaskView tasks={tasks} setTasks={setTasks} />}></Route>
              <Route path='/search' element={<About />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='*' element={<Home tasks={tasks} setTasks={setTasks}/>}></Route>
            </Routes>
          </section>
        </main>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
