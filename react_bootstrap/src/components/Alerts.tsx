import { Alert } from "react-bootstrap"

const Alerts = () => {
  return (
    <div className="p-3">
        <Alert variant="primary" className="text-bg-primary col-10 col-md-8 col-lg-6 mx-auto" dismissible title="Alerta">Um alerta de exemplo</Alert>
        <Alert variant="danger" className="text-bg-danger col-10 col-md-8 col-lg-6 mx-auto" dismissible title="Alerta">Um alerta de exemplo</Alert>
        <Alert variant="secondary" className="text-bg-secondary col-10 col-md-8 col-lg-6 mx-auto" dismissible title="Alerta">Um alerta de exemplo</Alert>
        <Alert variant="dark" className="text-bg-dark col-10 col-md-8 col-lg-6 mx-auto" dismissible title="Alerta">Um alerta de exemplo</Alert>
        <Alert variant="warning" className="text-bg-warning col-10 col-md-8 col-lg-6 mx-auto" dismissible title="Alerta">Um alerta de exemplo</Alert>

        <Alert dismissible className="col-10 col-md-8 col-lg-6 mx-auto">
            <Alert.Heading>
                <h1>Alerta</h1>
                <p>Um alerta de exemplo</p>
            </Alert.Heading>
        </Alert>
    </div>
  )
}

export default Alerts