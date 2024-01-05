import { useEffect } from "react";
import { useGetData } from "../../hooks/useGetData";

import { IPost } from "../../interfaces/IPost";

import ViewPost from "../../components/view_post/ViewPost";

import "./UserPosts.css";
import { Link } from "react-router-dom";

const UserPosts = () => {
  const { data, getPosts, loading } = useGetData();

  useEffect(() => {
    getPosts("userPosts");
  }, []);

  return (
    <section>
      {loading && <p>Carregando...</p>}
      {data.length > 0 && !loading ? (
        <>
          <h1>Essas são as suas postagens:</h1>
          {data.map((item: IPost) => (
            <ViewPost post={item} key={item.id} action={"userPosts"} />
          ))}
        </>
      ) : (
        <>
        <section className="buttons">
          <h2>Voçê ainda não tem nenhuma postagem!</h2>
          <Link to={"/addPost"} className="button button-success">
            Criar
          </Link>
        </section>
          <img src="https://cdn.pixabay.com/photo/2021/09/10/22/02/room-6614302_1280.jpg" alt="void" />
        </>
      )}
    </section>
  );
};

export default UserPosts;
