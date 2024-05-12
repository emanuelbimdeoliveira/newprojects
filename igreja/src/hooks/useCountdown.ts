import { useState } from "react";

export const useCountdown = (time: number) => {
  const [countdownValue, setCountdownValue] = useState<string>("00 : 00 : 00");

  const countdownActived = () => {
    const now = new Date().getTime();
    const distance = Math.floor((time - now) / 1000);

    const audio5 = new Audio("../../public/5minutos.mp3");
    const audio1 = new Audio("../../public/1minuto.mp3");

    if (distance < 0) return;

    switch (distance) {
      case 310:
        audio5.play();
        break;
      case 70:
        audio1.play();
        break;
    }

    const hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((distance % (60 * 60)) / 60);
    const seconds = Math.floor(distance % 60);

    setCountdownValue(
      `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(
        2,
        "0"
      )} : ${String(seconds).padStart(2, "0")}`
    );
  };

  return { countdownActived, countdownValue };
};
