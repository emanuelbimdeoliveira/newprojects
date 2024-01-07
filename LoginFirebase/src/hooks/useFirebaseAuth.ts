import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { auth } from "../services/FirebaseConfig";
import { useState } from "react";

export const useFirebaseAuth = () => {
  const [user, setUser] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();

  const loginWithGitHub = () => {
    const provider = new GithubAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GithubAuthProvider.credentialFromResult(result);
        // const token = credential!.accessToken;

        const user = result.user;
        localStorage.setItem("gitHubUserLoginApp", JSON.stringify(user));

        setUser(JSON.stringify(user));
        alert("Usuário registrado com sucesso!");
      })
      .catch((error) => {
        alert("Usuário registrado com sucesso!");
        return error
      });
  };

  const loginWithGoogle = () => {
    auth.languageCode = "it";

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(JSON.stringify(user));

        localStorage.setItem("googleUserLoginApp", JSON.stringify(user));
        alert("Usuário registrado com sucesso! " + user.displayName);
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  const loginWithEmail = async (
    name?: string,
    eMail?: string,
    passWord?: string
  ) => {
    setError("");
    try {
      let userEmailAndPassWord;
      if (name) {
        userEmailAndPassWord = await createUserWithEmailAndPassword(
          auth,
          eMail!,
          passWord!
        );
      } else {
        console.log(passWord)
        userEmailAndPassWord = await signInWithEmailAndPassword(
          auth,
          eMail!,
          passWord!
        );
      }
      setUser(`${userEmailAndPassWord}`);
      alert("Usuário registrado com sucesso! " + user);
    } catch (error: any) {
      if (error.message.includes("email")) {
        setError("Esse E-mail é inválido ou já existe!");
      } else if (error.message.includes("password")) {
        setError("Senha fraca, use pelo menos 8 caracteres!");
      } else {
        setError("Use outros dados!");
      }
    }
  };

  const logOut = async () => {
    await signOut(auth);
    localStorage.removeItem("googleUserLoginApp");
    localStorage.removeItem("gitHubUserLoginApp");
    setUser(undefined);
    window.location.reload();
    alert("Refaça seu login se necessário");
  };
  return {
    loginWithGoogle,
    loginWithGitHub,
    loginWithEmail,
    logOut,
    error,
    user,
  };
};
