
import FormComponent from "../../components/form/FormComponent"

import "./AddPost.css"

const AddPost = () => {
  return (
    <section>
        <h1>Adicionar Post</h1>
        <FormComponent actionOfComponent="addPost"/>
    </section>
  )
}

export default AddPost