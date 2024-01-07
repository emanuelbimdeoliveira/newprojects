import { useEffect, useState } from "react";
import FormComponent from "../components/FormComponent";
import "./Main.css";

const Main = () => {
  const currentColor = ["var(--blue)", "var(--orange)", "var(--purple)"];
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      setIndex((index) => {
        return index >= 2 ? 0 : (index += 1);
      });
    }, 10000);
  }, []);

  return (
    <main style={{ background: currentColor[index] }}>
      <section className="signUp">
        <h1>Registrar novo usuário</h1>
        <FormComponent action="signUp" />
      </section>

      <input type="checkbox" name="check" id="check" />

      <section className="login">
        <label htmlFor="check">
          <h1>Fazer Login</h1>
        </label>
        <FormComponent action="logIn" />
      </section>
    </main>
  );
};

export default Main;
