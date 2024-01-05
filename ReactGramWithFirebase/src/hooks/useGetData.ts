import { db } from "../../services/firebaseConfig";

import {
  DocumentData,
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { useState } from "react";
import { useGetContext } from "../context/FirebaseAuth";

import { IPost } from "../interfaces/IPost";

export const useGetData = () => {
  const [data, setData] = useState<IPost[] | DocumentData>([]);
  const [loading, setLoading] = useState(false);

  const { stateOfUser } = useGetContext();

  const getPosts = async (action: string) => {
    setLoading(true);
    try {
      let posts;
      if (action == "allPosts") {
        posts = await query(collection(db, "posts"), orderBy("title", "asc"));
      } else {
        posts = await query(
          collection(db, "posts"),
          where("user", "==", stateOfUser!.displayName),
          orderBy("title", "asc")
        );
      }
      await onSnapshot(posts!, (querySnapshot) => {
        setData(
          querySnapshot.docs.map((item) => ({
            id: item.id,
            ...item.data(),
          }))
        );
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return { data, getPosts, loading };
};
