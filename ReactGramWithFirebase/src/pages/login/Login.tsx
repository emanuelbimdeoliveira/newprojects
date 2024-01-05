
import { useGetContext } from "../../context/FirebaseAuth";

const Login = () => {
  const {login} = useGetContext();

  return (
    <section className="login">
      <h1>Fazer Login</h1>
      <h2>Na sua conta do Google:</h2>
      <p>Para usar esta aplicação voçê vai precisar estar logado com a sua conta do Google, isso é muito simples, voçê será direcionado para uma página externa.</p>
      <p>A maioria dos apps precisa reconhecer a identidade do usuário. Ter essa informação permite que um app salve os dados do usuário na nuvem com segurança e forneça a mesma experiência personalizada em todos os dispositivos do usuário.</p>
      <button className="button" onClick={() => {login!()}}>Entrar</button>
    </section>
  )
}

export default Login