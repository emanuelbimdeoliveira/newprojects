import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/navbar/NavBar'

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import UserPosts from './pages/user_posts/UserPosts'
import AddPost from './pages/add-post/AddPost'
import About from './pages/about/About'

import { useGetContext } from './context/FirebaseAuth'

import './App.css'

function App() {
  const {stateOfUser} = useGetContext();

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={!stateOfUser?.displayName ? <Login /> : <Navigate to={"/"} />} />
            <Route path='/userposts' element={stateOfUser?.displayName ? <UserPosts /> : <Navigate to={"/"} />} />
            <Route path='/addpost' element={stateOfUser?.displayName ? <AddPost /> : <Navigate to={"/"} />} />
            <Route path='/about' element={<About />} />
            <Route path='/logout' element={<Navigate to={"/"}/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
