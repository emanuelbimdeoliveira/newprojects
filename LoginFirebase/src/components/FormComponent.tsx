import { useState } from "react";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";
import "./FormComponent.css";

type Props = {
  action: string;
};

const FormComponent = ({ action }: Props) => {
  const [name, setName] = useState("");
  const [eMail, setEMail] = useState("");
  const [passWord, setPassWord] = useState("");

  const {
    loginWithGoogle,
    loginWithGitHub,
    loginWithEmail,
    logOut,
    error,
    user,
  } = useFirebaseAuth();

  return (
    <form>
      {user && <p>Voçê já fez o seu login!</p>}
      <fieldset className="buttons">
        <button onClick={() => loginWithGoogle()}>
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios/50/google-logo--v1.png"
            alt="google-logo--v1"
          />
          Google
        </button>
        <button onClick={() => loginWithGitHub()}>
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-github-social-media-tanah-basah-glyph-tanah-basah.png"
            alt="external-github-social-media-tanah-basah-glyph-tanah-basah"
          />
          GitHub
        </button>
      </fieldset>
      <div>
        <p>Ou com o seu E-mail e senha:</p>
      </div>
      <fieldset className="flex-column">
        {action == "signUp" && (
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu Nome:"
            required
          />
        )}

        <input
          type="text"
          onChange={(e) => setEMail(e.target.value)}
          placeholder="Seu Email:"
          required
        />

        <input
          type="text"
          onChange={(e) => setPassWord(e.target.value)}
          placeholder="Sua Senha:"
          required
        />
      </fieldset>
      <fieldset className="flex-column">
        {action == "signUp" ? (
          <>
            {error && <p>{error}</p>}
            <p></p>
            <input
              type="button"
              value="Registrar"
              onClick={() => loginWithEmail(name, eMail, passWord)}
            />
            <p>Login usando o suporte do Firebase</p>
          </>
        ) : (
          <>
            {error && <p>{error}</p>}

            <input
              type="button"
              value="Fazer Login"
              onClick={() => loginWithEmail(undefined, eMail, passWord)}
            />

            <input
              type="button"
              value="Desativar a sua conta do sistema?"
              onClick={() => logOut()}
            />
          </>
        )}
      </fieldset>
    </form>
  );
};

export default FormComponent;
