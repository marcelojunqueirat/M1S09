import { useState } from "react"
import './style.css'

function CardAdicionar(props) {
  const [textoTarefa, setTextoTarefa] = useState("")

  return (
    <>
      <input
        className="cardAdicionar"
        placeholder="Adicionar tarefa"
        type="text"
        value={textoTarefa}
        onChange={ (evento) => {setTextoTarefa(evento.target.value)} }
      />
      <button onClick={() => props.adicionarTarefa()} >Adicionar</button>
    </>
  )
}


export default CardAdicionar