import { useEffect } from "react";
import { useGetContext } from "../../context/FirebaseAuth";
import { useGetData } from "../../hooks/useGetData";

import { IPost } from "../../interfaces/IPost";

import ViewPost from "../../components/view_post/ViewPost";

import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const { stateOfUser } = useGetContext();
  const { data, getPosts, loading } = useGetData();

  useEffect(() => {
    getPosts("allPosts");
  }, []);

  return (
    <section>
      {stateOfUser && <h1>Bem vindo {stateOfUser!.displayName}!</h1>}
      {loading && <p>Carregando...</p>}
      {data.length > 0 && !loading ? (
        <>
          <h2>Aqui estão as principais publicações dos usuários:</h2>
          {data.map((item: IPost) => (
            <ViewPost post={item} key={item.id} action="postsOfHome" />
          ))}
        </>
      ) : (
        <section>
          <h2>
            Ainda não existe nenhuma postagem! Participe também adicionando o
            que quiser!
          </h2>
          <div className="buttons">
            <h2>Seja o primeiro a postar: </h2>
            <Link to={"/addpost"} className="button button-success">
              Clique aqui
            </Link>
          </div>
          <img src="https://cdn.pixabay.com/photo/2021/09/10/22/02/room-6614302_1280.jpg" alt="void" />
        </section>
      )}
    </section>
  );
};

export default Home;
