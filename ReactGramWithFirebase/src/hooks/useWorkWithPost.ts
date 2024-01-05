import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

import { useGetContext } from "../context/FirebaseAuth";

import { IPost, IComment } from "../interfaces/IPost";

export const useWorkWithPost = (post: IPost) => {
    const { stateOfUser } = useGetContext();  
    
  // any only here because of firebase
  const postDoc: any = post;

  const addComment = async (post: IPost, comment: IComment) => {
    post.comments = [...post.comments, comment!];
    await updateDoc(doc(db, "posts", post.id), postDoc);
  };

  const deleteComment = async (post: IPost, comment: string) => {
    if (confirm("Deseja excluir esse comentário?")) {
      post.comments = post.comments.filter((item: IComment) => {
        return item.comment !== comment;
      });
      await updateDoc(doc(db, "posts", post.id), postDoc);
    }
  };

  const likeThisPost = async (post: IPost, id: string) => {
    if (!post.likes.includes(stateOfUser!.email)) {
      post.likes = !post.likes
        ? [stateOfUser!.email]
        : [...post.likes, stateOfUser!.email];
      await updateDoc(doc(db, "posts", id), postDoc);
    } else {
      alert("Voçê já deu o like!");
    }
  };

  const deletePost = async (id: string) => {
    if (confirm("Deseja excluir esta postagem?")) {
      await deleteDoc(doc(db, "posts", id));
    }
  };
  return { addComment, deleteComment, likeThisPost, deletePost };
};
