import { useState } from "react";
import { Container } from "react-bootstrap";

import "./Clock.css";

const Clock = () => {
  const [seconds, setSeconds] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [hours, setHours] = useState<string>("");

  const clockWork = () => {
    let secondsDeg = new Date().getSeconds();
    let minutesDeg = new Date().getMinutes();
    let hoursDeg = new Date().getHours();

    // analogic clock
    const finalHoursDeg = hoursDeg > 12 ? hoursDeg - 12 : hoursDeg;
    const totalMinutesDeg = finalHoursDeg * 60 + minutesDeg;

    setSeconds(`rotateZ(${secondsDeg * 6}deg)`);
    setMinutes(`rotateZ(${minutesDeg * 6}deg)`);
    setHours(`rotateZ(${totalMinutesDeg * 0.5}deg)`);
      };

  setInterval(() => {
    clockWork();
  }, 1000);

  return (
    <>
      <Container fluid>
        <section className="clock-display mx-auto rounded-circle shadow">
          <span className="centerDot"></span>

          <div className="hours" style={{transform: `${hours}`}}>
            <span className="hours-hand"></span>
          </div> 

          <div className="minutes" style={{transform: `${minutes}`}}>
            <span className="minutes-hand"></span>
          </div>

          <div className="seconds" style={{transform: `${seconds}`}}>
            <span className="seconds-hand"></span>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Clock;
