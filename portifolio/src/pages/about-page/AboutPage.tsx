import PreloadImg from "../../components/PreLoadImg";
import { useNavigateFunction } from "../../hooks/useNavigateFunction";
import "./AboutPage.css";

const AboutPage = () => {
  const { navigate } = useNavigateFunction();
  return (
    <section className="about-page">
      <h1>Emanuel Bim</h1>
      <article>
        <h2>Sobre Mim:</h2>
        <div className="first-section">
          <div className="text-div">
            <p>
              Olá, eu trabalho com desenvolvimento web e sou especializado na
              plataforma WordPress. Com um percurso de estudo e prática de mais
              de um ano e meio, mergulhei no mundo da programação com o objetivo
              de criar experiências digitais agradáveis e funcionais.
            </p>

            <p>
              Além da minha experiência em WordPress, tenho também conhecimento
              abrangente em diversas tecnologias essenciais para o
              desenvolvimento web. Minhas habilidades incluem HTML, CSS,
              JavaScript, Bootstrap, React e TypeScript. Eu também estou
              familiarizado com os terminais Git, PowerShell e NPM, o que me
              permite gerenciar eficientemente o ciclo de desenvolvimento de um
              software.
            </p>
          </div>
          <div className="img-div">
            <PreloadImg src="./profile-img.webp" className="img" alt="emanuel" />
          </div>
        </div>

        <p>
          Também tenho conhecimento sobre o serviço Firebase, permitindo-me
          integrar poderosas funcionalidades de back-end aos projetos web que
          desenvolvo. Essa ampla gama de habilidades me capacita a criar
          soluções completas e personalizadas para os desafios de cada projeto.
        </p>
        <p>
          Estou entusiasmado para aplicar minhas habilidades e conhecimentos em
          projetos desafiadores e colaborativos, trazendo soluções criativas e
          eficazes para as necessidades dos meus futuros clientes. Meu objetivo
          como freelancer é não apenas entregar produtos de alta qualidade, mas
          também estabelecer relações sólidas e confiáveis com aqueles com quem
          trabalho.
        </p>
        <PreloadImg
          src="
              https://github.com/emanuelbimdeoliveira/newprojects/blob/main/portfolioIMG/code-background-2.jpg?raw=true
              "
          className="img"
          alt="code-background"
        />
      </article>
      <article>
        <h2>Minha história:</h2>
        <div className="second-section">
          <div className="text-div">
            <p>
              Minha jornada em direção à programação é uma história de
              transformação, determinação e descoberta pessoal. Desde cedo,
              sempre fui reconhecido por meu desempenho na escola em diversas
              disciplinas. No entanto, a área da programação nunca havia sido
              uma consideração para mim até um ponto crucial em minha vida.
            </p>

            <p>
              Ao olhar para trás, minha entrada na programação foi mais por
              necessidade do que por escolha. Em um período de poucas
              oportunidades e sem perspectivas de progresso, vi-me diante da
              necessidade de explorar novos horizontes profissionais. Foi nesse
              momento que eu decidi estudar programação, juntamente com Inglês
              (que é uma necessidade básica para qualquer programador).
            </p>
          </div>
          <div className="img-div">
            <PreloadImg
              src="./profile-img-2.png"
              className="img"
              alt="emanuel"
            />
          </div>
        </div>
        <p>
          O que mais me atraiu na programação foi sua capacidade de criar,
          inovar e impactar positivamente a vida das pessoas. A medida que
          progredia, percebia que não se tratava apenas de codificar linhas de
          texto, mas sim de construir soluções tangíveis que melhoravam a vida
          das pessoas e simplificavam processos complexos.
        </p>
        <p>
          A cada desafio enfrentado, mergulhei mais fundo no mundo da
          programação, absorvendo conhecimento e habilidades técnicas que me
          aproximavam do meu objetivo: tornar-me um programador profissional.
          Embora tenha encontrado obstáculos ao longo do caminho, nunca perdi de
          vista minha determinação e minha visão de futuro.
        </p>
        <p>
          Mesmo enquanto trabalhava em profissões alheias a tecnologia, eu
          sentia que merecia uma profissão à altura do meu potencial. A
          programação se revelou não apenas como uma profissão, mas como uma
          vocação, confirmando as palavras de encorajamento que recebi no
          passado sobre minha inteligência e capacidade.
        </p>
        <p>
          Hoje, estou próximo de alcançar o status de programador profissional.
          Minha jornada não é apenas motivada pelo dinheiro, mas sim pela busca
          por uma melhor qualidade de vida, pela oportunidade de criar algo
          significativo e pela satisfação de contribuir de forma positiva para o
          mundo e as pessoas.
        </p>
        <p>
          Olhando para o futuro, mantenho-me comprometido com a aprendizagem
          contínua e o aprimoramento constante. Acredito que a programação não é
          apenas uma profissão, mas sim um estilo de vida, uma jornada de
          descoberta e realização pessoal.
        </p>
        <PreloadImg
          src="https://github.com/emanuelbimdeoliveira/newprojects/blob/main/portfolioIMG/code-background-1.jpg?raw=true"
          className="img"
          alt="code"
        />
        <button className="success" onClick={() => navigate("/contact")}>
          Entrar em contato
        </button>
      </article>
    </section>
  );
};

export default AboutPage;
