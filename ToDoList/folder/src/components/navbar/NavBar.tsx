import React from 'react'

import { NavLink } from 'react-router-dom'

import "./NavBar.css"

type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav>
        <NavLink to={"/"}><p>To Do List</p></NavLink>
        <form>
            <input type="text" placeholder='Buscar Tarefa'/>
            <input type="submit" value="B" />
        </form>
        <NavLink to={"/about"}><p>Sobre</p></NavLink>
    </nav>
  )
}

export default NavBar