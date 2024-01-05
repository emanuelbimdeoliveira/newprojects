import { useState } from "react";
import { useWorkDB } from "../../hooks/useWorkDB";

import "./FormComponent.css"

type Props = {
  actionOfComponent?: string
}

const FormComponent = ({actionOfComponent}: Props) => {
  
  const [title, setTitle] = useState<string>("");
  const [urlImg, setUrlImg] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const {addPost, error} = useWorkDB(title, urlImg, description);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost()
  }

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <fieldset>
        <div>
          <label>
            <span>Título:</span>
            <input type="text" placeholder="Adicione um título" required onChange={(e) => setTitle(e.target.value)} value={title}/>
          </label>
  
          <label>
            <span>URL da Imagem:</span>
            <input type="text" placeholder="Adicione uma URL válida" required onChange={(e) => setUrlImg(e.target.value)} value={urlImg}/>
          </label>
  
          <label>
            <span>Descrição:</span>
            <input type="text" placeholder="Adicione uma descrição" required onChange={(e) => setDescription(e.target.value)} value={description}/>
          </label>
        </div>
        <div className="buttons">
          <input type="reset" className="button button-danger" value="Cancelar" />
          <input type="submit" className="button button-success" value={actionOfComponent == "addPost" ? "Adicionar" : "Salvar"} />
        </div>
      </fieldset>
      {error && (
        <p>{error}</p>
      )}
    </form>
 )
}

export default FormComponent