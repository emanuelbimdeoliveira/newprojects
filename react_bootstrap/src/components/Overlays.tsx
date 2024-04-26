import {
  Button,
  OverlayTrigger,
  Pagination,
  Popover,
  Row,
  Tooltip,
} from "react-bootstrap";

const Overlays = () => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover na esquerda</Popover.Header>
      <Popover.Body>
        Muito interessante <strong>esse popover.</strong>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="p-3">
      <Row xs={4} className="d-flex justify-content-center gap-3 py-3">
        {["top", "right", "bottom", "left"].map((placement) => (
          <OverlayTrigger
            key={placement}
            placement={"top"}
            overlay={
              <Tooltip id={`tooltip-${placement}`}>
                Tooltip on <strong>{placement}</strong>.
              </Tooltip>
            }
          >
            <Button variant="secondary">Tooltip on {placement}</Button>
          </OverlayTrigger>
        ))}
      </Row>
      <OverlayTrigger trigger="click" placement="left" overlay={popover}>
        <Button variant="success" className="d-block mx-auto my-3">
          Popover exemplo
        </Button>
      </OverlayTrigger>
      <Pagination className="col-6 mx-auto d-flex justify-content-center">
        <Pagination.First href="/" />
        <Pagination.Prev href="/" />
        <Pagination.Ellipsis href="/" />
        <Pagination.Next href="/" />
        <Pagination.Last href="/" />
      </Pagination>
    </div>
  );
};

export default Overlays;
