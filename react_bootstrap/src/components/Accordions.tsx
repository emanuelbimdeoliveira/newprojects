import { Accordion, Figure } from "react-bootstrap";

const Accordions = () => {
  return (
    <div>
      <Accordion
        className="col-10 col-md-8 col-lg-6 mx-auto bg-danger text-bg-danger"
        data-bs-theme="dark"
      >
        <Accordion.Item eventKey={"0"}>
          <Accordion.Header>Accordion Item 1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur asperiores assumenda incidunt ea! Voluptatibus incidunt
            quos voluptate, distinctio consectetur ea nam cumque sint accusamus
            non deserunt? Voluptas velit deleniti tenetur!
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey={"1"}>
          <Accordion.Header>Accordion Item 2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur asperiores assumenda incidunt ea! Voluptatibus incidunt
            quos voluptate, distinctio consectetur ea nam cumque sint accusamus
            non deserunt? Voluptas velit deleniti tenetur!
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey={"2"}>
          <Accordion.Header>Accordion Item 3</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur asperiores assumenda incidunt ea! Voluptatibus incidunt
            quos voluptate, distinctio consectetur ea nam cumque sint accusamus
            non deserunt? Voluptas velit deleniti tenetur!
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey={"3"}>
          <Accordion.Header>Accordion Item 4</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur asperiores assumenda incidunt ea! Voluptatibus incidunt
            quos voluptate, distinctio consectetur ea nam cumque sint accusamus
            non deserunt? Voluptas velit deleniti tenetur!
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Figure className="col-10 col-md-8 col-lg-6 d-block text-center mx-auto my-3">
        <Figure.Image
          src="https://images.pexels.com/photos/9319298/pexels-photo-9319298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="buildings"
        />
        <Figure.Caption>Prédios</Figure.Caption>
      </Figure>
    </div>
  );
};

export default Accordions;
