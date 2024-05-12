import { Button, Container, Stack } from "react-bootstrap"

const Home = () => {
  return (
    <>
        <Container fluid>
            <h1 className="text-center text-contrast">Bem vindo!</h1>
            <p className="text-center text-contrast">Aqui você vai encontrar algums programas simples e muito úteis para a programação de sua igreja.</p>
            <h2 className="text-center text-contrast">Escolha uma opção:</h2>
            <Stack className="d-flex flex-column flex-lg-row shadow rounded-3 p-3 py-5 my-3 gap-3 mx-auto col-12 col-md-8 d-flex justify-content-center align-items-center bg-light">
                <Button className="bg text-bg p-2 border-0 outlined-0 col-10 col-md-6 col-lg-4" href="/countdown">Temporizador</Button>
                <Button className="bg text-bg p-2 border-0 outlined-0 col-10 col-md-6 col-lg-3" href="/clock">Relógio</Button>
                <Button className="bg text-bg p-2 border-0 outlined-0 col-10 col-md-6 col-lg-4" href="/random">Números Aleatórios</Button>
            </Stack>
        </Container>
    </>
  )
}

export default Home