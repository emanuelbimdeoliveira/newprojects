import { useEffect, useState } from "react";

import { typesOfRequest } from "../../pages/form/Form";

import "./InputForms.css"

type Props = {
    requestType: string
    handleSubmit: (e: React.FormEvent<HTMLFormElement>, request?: typesOfRequest) => void
}
 
const InputForms = ({requestType, handleSubmit}: Props) => {
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(0);
    const [label, setLabel] = useState<string[]>([]);

    const request = {
        requestType,
        min,
        max
       }

    useEffect(() => {
        switch (requestType) {
            case "period":
                setLabel(["Período de Rotação Mínimo (dias):", "Período de Rotação Máximo (dias):"])
                break;            
            case "size":
                setLabel(["Tamanho Mínimo (KM):", "Tamanho Máximo (KM):"])
                break;
            case "temperature":
                setLabel(["Temperatura Mínima (Celsius):", "Temperatura Máxima (Celsius):"])
                break;            
            default:
                break;
        }
    }, [requestType])

  return (
    <section className="input-forms">
        <form onSubmit={(e) => handleSubmit(e, request)}>
            <fieldset> 
                <label>
                    <p>{label[0]}</p>
                    <input type="number" onChange={(e) => setMin(Number(e.target.value))} value={min ?? 0}/>
                </label>
                <label>
                    <p>{label[1]}</p>
                    <input type="number" onChange={(e) => setMax(Number(e.target.value))} value={max ?? 0}/>
                </label>
                <input type="submit" value="Avançar" />
            </fieldset>
        </form>
    </section>
  )
}

export default InputForms