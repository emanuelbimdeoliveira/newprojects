
import { useState } from "react";

import { useGetContext } from "../../context/FirebaseAuth";

import { IComment, IPost } from "../../interfaces/IPost";

import "./ViewPost.css";

import { useWorkWithPost } from "../../hooks/useWorkWithPost";

type Props = {
  post: IPost;
  action: string;
};

const ViewPost = ({ post, action }: Props) => {
  const [comment, setComment] = useState<IComment | undefined>(undefined);

  const { stateOfUser } = useGetContext();

  const {addComment, deleteComment, likeThisPost, deletePost} = useWorkWithPost(post);

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
            onClick={() => likeThisPost(post, post.id)}
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
                        onClick={() => deleteComment(post, item.comment)}
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
                  addComment(post, comment!);
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
                  addComment(post, comment!);
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
