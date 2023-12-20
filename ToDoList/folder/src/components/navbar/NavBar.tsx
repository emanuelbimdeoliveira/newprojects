
import { NavLink } from 'react-router-dom'

import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
        <NavLink to={"/"}>
            <i className='material-symbols-outlined'>home</i>
        </NavLink>
        <div className='normal-menu'>
          <a href="">Repositório</a>
          <a href="">Mais Projetos</a>
          <a href="">Portifólio</a>
          <NavLink to={"/about"}><p>Sobre</p></NavLink>
        </div>
        <div className='small-menu'>
          <label htmlFor="menu-toggle">
            <i className='material-symbols-outlined'>menu</i>
          </label>
          <input type="checkbox" name="menu-toggle" id="menu-toggle" />
          <aside className="sidebar">
            <label htmlFor="menu-toggle">
              <i className='material-symbols-outlined'>menu</i>
            </label>
            <a href="">Repositório</a>
            <a href="">Mais Projetos</a>
            <a href="">Portifólio</a>
            <NavLink to={"/about"}><p>Sobre</p></NavLink>
          </aside>
        </div>
    </nav>
  )
}

export default NavBar