import { useEffect, useState } from "react"

import { useHttpRequest } from "../../hooks/useHttpRequest";

import InputForms from "../../components/form_inputs/InputForms";
import DisplayData from "../../components/display_data/DisplayData";

import "./Form.css"

export type typesOfRequest = {
    requestType: string
    min: number
    max: number
}

const Form = () => {
    const [selectedOption, setSelectedOption] = useState<string>("solarSistem");
    const [planetOption, setPlanetOption] = useState<string>("earth");

    const {getApiResponse, loading, data} = useHttpRequest();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, request?: typesOfRequest) => {
        e.preventDefault();

        if (!request) {
            getApiResponse(planetOption)
        } else {
            getApiResponse(undefined, request)
        }
    }

    useEffect(() => {
        planetOption && getApiResponse(planetOption)
    }, [planetOption])
  return (
    <section className="form">
        <h1>Escolha as opções:</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <fieldset className="first-option">
                <label>
                    <p>Escolha uma opção de entrada:</p>
                    <select name="primary-input" id="primary-input" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                        <option value="solarSistem">Sistema Solar</option>
                        <option value="period">Período de Rotação</option>
                        <option value="size">Tamanho</option>
                        <option value="temperature">Temperatura</option>
                    </select>
                </label>
            </fieldset>
            {selectedOption == "solarSistem" && (
                <fieldset className="planet-option">
                    <label>
                        <p>Escolha um Planeta</p>
                            <select name="planet-input" id="planet-input" value={planetOption} onChange={(e) => setPlanetOption(e.target.value)}>
                                <option value="mercury">Mercúrio</option>
                                <option value="venus">Vênus</option>
                                <option value="earth">Terra</option>
                                <option value="mars">Marte</option>
                                <option value="jupiter">Júpiter</option>
                                <option value="saturn">Saturno</option>
                                <option value="uranus">Urano</option>
                                <option value="neptune">Netuno</option>
                                <option value="pluto">Plutão</option>
                            </select>
                    </label>
                    <input type="submit" value="Avançar" />
                </fieldset>
            )} 
        </form>

        {selectedOption !== "solarSistem" && 
            <InputForms requestType={selectedOption} handleSubmit={handleSubmit}/>
        }
        {data && <DisplayData data={data} planetOption={planetOption} loading={loading}/>}
    </section>
  )
}

export default Form