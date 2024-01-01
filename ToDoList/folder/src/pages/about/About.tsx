
import { NavLink } from "react-router-dom"

import "./About.css"

const About = () => {
  return (
    <>
      <h1>To Do List com TypeScript e React!</h1>
      <section className='about-content'>
        <p>Esse é uma aplicação de React feita juntamente com TypeScript para adicionar, remover, editar e visualizar as suas tarefas.</p>
        <ul>
          <li><p>Esses são os dados de cada tarefa:</p></li>
          <ol>
            <li>Nome;</li>
            <li>Identificação por um número;</li>
            <li>Momento da criação;</li>
            <li>Momento para a conclusão;</li>
            <li>Dificuldade;</li>
            <li>Estado da tarefa(concluída ou não)</li>
          </ol>
        </ul>
      </section>
        <NavLink to={"/"} className='back-link'><span className='material-symbols-outlined'>arrow_back</span></NavLink>
    </>
  )
}

export default About