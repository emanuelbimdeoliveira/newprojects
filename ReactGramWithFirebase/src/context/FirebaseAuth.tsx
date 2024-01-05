import { ReactNode, createContext, useState } from "react";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { app } from "../../services/firebaseConfig";

import { useContext } from "react";

import { IUser } from "../interfaces/IUser";

export const FirebaseAuthContext: React.Context<{
  stateOfUser?: IUser;
  login?: () => void;
}> = createContext({});

export const auth = getAuth(app);

export const FirebaseAuthProvider = ({ children }: { children: ReactNode }) => {
  const provider = new GoogleAuthProvider();

  const userFromLocalStorage = localStorage.getItem("user-reactgram") || "{}";
  const [stateOfUser, setStateOfUser] = useState(
    JSON.parse(userFromLocalStorage)
  );

  auth.languageCode = "it";

  const login = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential!.accessToken;

        const user = result.user;
        setStateOfUser({ user });

        localStorage.setItem("user-reactgram", JSON.stringify(user));
        window.location.reload()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
        alert("Aldo deu errado!");
        alert(`${errorCode} ${errorMessage} ${email} ${credential}}`);
      });
  };

  return (
    <FirebaseAuthContext.Provider value={{ stateOfUser, login }}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export const useGetContext = () => {
  const { stateOfUser, login } = useContext(FirebaseAuthContext);

  return { stateOfUser, login };
};

export default FirebaseAuthProvider;
