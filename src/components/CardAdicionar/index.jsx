import { useState } from "react"
import './style.css'

function CardAdicionar(props) {
  const [textoTarefa, setTextoTarefa] = useState("")

  const handleAdicionarTarefa = () => {
    props.adicionarTarefa(textoTarefa)
    setTextoTarefa("")
  } 

  return (
    <>
      <input
        className="cardAdicionar"
        placeholder="Adicionar tarefa"
        type="text"
        value={textoTarefa}
        onChange={ (evento) => {setTextoTarefa(evento.target.value)} }
      />
      <button onClick={() => handleAdicionarTarefa()} >Adicionar</button>
    </>
  )
}


export default CardAdicionar