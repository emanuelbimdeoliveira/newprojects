
import { Link } from "react-router-dom"
import "./Home.css"


const Home = () => {
  return (
    <section className='home'>
        <article className="titles">
            <h1>Conhecendo os Planetas!</h1>
            <h2>Aqui voçê pode obter algumas <br /> informações sobre o planeta que desejar:</h2>
        </article>
        <article className="features">
            <ul>
                <li>Massa;</li>
                <li>Tamanho;</li>
                <li>Período de Rotação;</li>
                <li>Temperatura média;</li>
            </ul>
            <Link to={"/form"}>Avançar</Link>
        </article>
    </section>
  )
}

export default Home