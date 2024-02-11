import { useState } from "react";
import "./FormComponent.css";

const FormComponent = () => {
  const [eMail, setEMail] = useState<string>("");
  const sendEmail = () => {
    console.log(eMail);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendEmail();
      }}
    >
      <label>
        <p>O que posso fazer por voçê?</p>
        <textarea
          name="email-content"
          id="email-content"
          placeholder="Escreva seu E-mail aqui:"
          value={eMail}
          onChange={(e) => {
            setEMail(e.target.value);
          }}
        ></textarea>
      </label>
      <div className="submit-input">
        <input type="submit" value="Enviar" className="success" />
      </div>
    </form>
  );
};

export default FormComponent;
