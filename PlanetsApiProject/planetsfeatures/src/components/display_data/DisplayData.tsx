
import { useDealOfData } from '../../hooks/useDealOfData'

import { IData } from '../../interfaces/IData'

import "./DisplayData.css"

type Props = {
    data: IData[]
    planetOption?: string
    loading?: boolean
}

const DisplayData = ({data, planetOption: planetName, loading}: Props) => {
    const {planetOption} = useDealOfData(planetName!);

  return (
      <section className='display-data'>
        {loading && <p>carregando...</p>}
        {data.length == 0 && <p>Valores Inválidos!</p>}
        {data.length > 0 && !loading && data.map((item, index) =>(
            <article key={index}>
                {data.length > 1 ? (
                    <h2>{item.name}</h2>
                ) : (
                    <h2>{planetOption}</h2>
                )}

                {!item.mass ? (
                    <p><strong>Massa:</strong> Não há dados disponíveis;</p>
                ) : (
                    <p><strong>Massa:</strong> {(String((item.mass! * 1898).toFixed(2))).replace(".", ",")} X 10<sup>24</sup>;</p>
                )}

                {!item.period ? (
                    <p><strong>Período de Rotação:</strong> Não há dados disponíveis;</p>
                ) : (
                    <p><strong>Período de Rotação:</strong> {Math.round(item.period)} dias;</p>
                )}

                {!item.radius ? (
                    <p><strong>Tamanho:</strong> Não há dados disponíveis;</p>
                ) : (
                    <p><strong>Tamanho:</strong> {Math.round((item.radius! * 69911) * 2)}KM de diâmetro;</p>
                )}

                <p><strong>Temperatura média:</strong> {Math.round(item.temperature! - 273.15)}° Celsius</p>
            </article>
        ))}
    </section>
  )
}

export default DisplayData