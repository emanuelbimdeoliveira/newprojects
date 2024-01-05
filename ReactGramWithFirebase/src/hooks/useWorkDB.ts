import { useState } from "react";
import { useGetContext } from "../context/FirebaseAuth";

import { db } from "../../services/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export const useWorkDB = (
  title?: string,
  urlImage?: string | URL,
  description?: string
) => {
  const [error, setError] = useState("");

  const { stateOfUser } = useGetContext();

  const addPost = async () => {
    try {
      urlImage = String(new URL(urlImage!));
      setError("");
    } catch {
      setError("URL inválida!");
      return;
    }

    const post = {
      title,
      urlImage,
      description,
      user: stateOfUser!.displayName,
      userId: stateOfUser!.uid,
      timeNow: new Date(),
      comments: [],
      likes: [],
    };

    try {
      await addDoc(collection(db, "posts"), post);
    } catch (error) {
      console.log(error!);
    }

    alert("Voçê adicionou uma nova Postagem!");
  };

  return { addPost, error };
};
