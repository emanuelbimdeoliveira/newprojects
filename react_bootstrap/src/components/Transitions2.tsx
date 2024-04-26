import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

function Transition2() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container className="col-8 mx-auto">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Transição horizontal
        </Button>
        <div style={{ minHeight: "150px" }}>
          <Collapse in={open} dimension="width">
            <div id="example-collapse-text">
              <Card body style={{ width: "400px" }}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </Card>
            </div>
          </Collapse>
        </div>
      </Container>
    </>
  );
}

export default Transition2;
