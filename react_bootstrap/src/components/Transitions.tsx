import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";

function Transitions() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container className="col-8 mx-auto">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-fade-text"
          aria-expanded={open}
        >
          Mostrar texto
        </Button>
        <Fade in={open}>
          <div id="example-fade-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Fade>
      </Container>
    </>
  );
}

export default Transitions;
