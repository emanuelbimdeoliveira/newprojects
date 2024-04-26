import { Alert } from "react-bootstrap";

const NotFound = () => {
  return (
    <Alert
      variant="danger"
      className="col-6 mx-auto shadow rounded-3 mt-3 text-center p-5"
      dismissible
      closeLabel="Fechar"
    >
      <Alert.Heading>Página não encontrada!</Alert.Heading>
      <Alert.Link href="/">Voltar</Alert.Link>
    </Alert>
  );
};

export default NotFound;
