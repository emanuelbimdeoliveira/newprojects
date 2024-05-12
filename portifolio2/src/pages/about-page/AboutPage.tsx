import { Button, Col, Row } from "react-bootstrap";
import PreloadImg from "../../components/PreLoadImg";
import { useNavigateFunction } from "../../hooks/useNavigateFunction";

const AboutPage = () => {
  const { navigate } = useNavigateFunction();

  return (
    <section className="py-5 px-2 text-bg-contrast">
      <Row className="d-flex justify-content-center flex-column flex-md-row align-items-center gap-4 my-5 py-5">
        <Col xs={10} md={4}>
          <h2>Minha história:</h2>
          <p>
            Minha jornada em direção à programação é uma história de
            transformação, determinação e descoberta pessoal. Desde cedo, sempre
            fui reconhecido por meu desempenho na escola em diversas
            disciplinas. No entanto, a área da programação nunca havia sido uma
            consideração para mim até um ponto crucial em minha vida.
          </p>

          <p>
            Ao olhar para trás, minha entrada na programação foi mais por
            necessidade do que por escolha. Em um período de poucas
            oportunidades e sem perspectivas de progresso, vi-me diante da
            necessidade de explorar novos horizontes profissionais. Foi nesse
            momento que eu decidi estudar programação, juntamente com Inglês
            (que é uma necessidade básica para qualquer programador).
          </p>
        </Col>
        <Col xs={10} md={4}>
          <PreloadImg
            src="./profile-img.webp"
            className="rounded-circle w-100"
            alt="emanuel"
          />
        </Col>
      </Row>

      <article className="col-10 col-md-8 mx-auto py-5">
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
      </article>
      <article className="col-10 col-md-8 mx-auto py-5">
        <PreloadImg
          src="https://github.com/emanuelbimdeoliveira/newprojects/blob/main/portfolioIMG/code-background-1.jpg?raw=true"
          className="d-block mx-auto my-5 rounded shadow w-100"
          alt="code"
        />
        <Button
          className="rounded-3 col-8 col-md-6 d-block mx-auto my-5 bg text-bg border-0"
          onClick={() => navigate("/contact")}
        >
          Entrar em contato
        </Button>
      </article>
    </section>
  );
};

export default AboutPage;
