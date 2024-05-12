
const ContactPage = () => {
  return (
    <section className="py-5 text-center text-bg-contrast px-3 d-flex flex-column justify-content-center align-items-center" style={{minHeight: "80vh"}}>
      <h1>Contato</h1>
      <h2>Vamos Transformar Sua Visão em Realidade!</h2>
      <p>
        Entre em contato comigo para discutirmos sobre seu projeto, ideias e
        requisitos. Juntos, podemos criar uma presença online que ajudará o seu
        negócio a crescer e a expandir também na área digital.
        <a
          href="https://api.whatsapp.com/send?phone=5542999818385"
          target="_blank"
        >
          Vamos começar!
        </a>
      </p>
      <p>
        E se desejar obter mais informações sobre meu trabalho, meus serviços
        oferecidos e sobre a minha tabela de preços, acesse algum dos links
        abaixo:
      </p>
    </section>
  );
};

export default ContactPage;
