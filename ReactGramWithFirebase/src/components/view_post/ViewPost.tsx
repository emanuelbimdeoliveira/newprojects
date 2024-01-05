import { db } from "../../../services/firebaseConfig";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

import { useState } from "react";

import { useGetContext } from "../../context/FirebaseAuth";

import { IComment, IPost } from "../../interfaces/IPost";

import "./ViewPost.css";

type Props = {
  post: IPost;
  action: string;
};

const ViewPost = ({ post, action }: Props) => {
  const [comment, setComment] = useState<IComment | undefined>(undefined);

  const { stateOfUser } = useGetContext();

  // any only here because of firebase
  const postDoc: any = post;

  const addComment = async () => {
    post.comments = [...post.comments, comment!];
    await updateDoc(doc(db, "posts", post.id), postDoc);
  };

  const deleteComment = async (comment: string) => {
    if (confirm("Deseja excluir esse comentário?")) {
      post.comments = post.comments.filter((item: IComment) => {
        return item.comment !== comment;
      });
      await updateDoc(doc(db, "posts", post.id), postDoc);
    }
  };

  const likeThisPost = async (id: string) => {
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

  return (
    <section className="post-view">
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      {action == "postsOfHome" && (
        <>
          <img src={post.urlImage} alt={post.title} />
          <p>Criado por: {post.user}</p>
          <button
            className="like button-success"
            onClick={() => likeThisPost(post.id)}
          >
            <i className="material-symbols-outlined">thumb_up</i> {post.likes.length}
          </button>
        </>
      )}
      {action == "postsOfHome" ? (
        <>
          {post.comments.length > 0 ? (
            <>
              <h2>Comentários:</h2>
              <ul className="comment-list">
                {post.comments.map((item: IComment, index: number) => (
                  <li key={index}>
                    <p className="comment-text">{item.comment}</p>
                    <p className="comment-user-name">{item.user}</p>
                    {item.user == stateOfUser!.email && (
                      <button
                        onClick={() => deleteComment(item.comment)}
                        className="button button-danger"
                      >
                        Excluir
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addComment();
                }}
                className="form-comment"
              >
                <input
                  type="text"
                  className="add-comment"
                  placeholder="Adicione um comentário aqui:"
                  onChange={(e) =>
                    setComment({
                      comment: e.target.value,
                      user: stateOfUser!.email,
                    })
                  }
                />
                <input
                  type="submit"
                  className="button button-success"
                  value={"Adicionar"}
                />
              </form>
            </>
          ) : (
            <>
              <p>Ainda não existem comentários!</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addComment();
                }}
                className="form-comment"
              >
                <input
                  type="text"
                  className="add-comment"
                  placeholder="Adicione um comentário aqui:"
                  onChange={(e) =>
                    setComment({
                      comment: e.target.value,
                      user: stateOfUser!.email,
                    })
                  }
                />
                <input
                  type="submit"
                  className="button button-success"
                  value={"Adicionar"}
                />
              </form>
            </>
          )}
        </>
      ) : (
        <>
          <img src={post.urlImage} alt={post.title} />
          <div className="buttons">
            <button
              onClick={() => deletePost(post.id)}
              className="button button-danger"
            >
              Excluir
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default ViewPost;
