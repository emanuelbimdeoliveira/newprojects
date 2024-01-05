import { useParams } from "react-router-dom";

import "./EditPost.css";
import { useGetData } from "../../hooks/useGetData";
import { useEffect } from "react";

const EditPost = () => {
  const id = useParams().id;
  let {data, getPosts} = useGetData();

  useEffect(() => {
    getPosts(id!)
    console.log(data)
  }, [])

  return (
    <>
      <h1>Editar Postagem</h1>
    </>
  );
};

export default EditPost;
