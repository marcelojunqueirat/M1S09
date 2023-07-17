import './App.css'
import CardAdicionar from './components/CardAdicionar'

function App() {
  const [listaTarefas, setListaTarefas] = useState([])

  const adicionarTarefa = (texto) => {
    if (texto == "") {
      alert("É necessário escrever uma tarefa.")
      return
    }
    alert("Criado função addTarefa")
  }

  return (
    <>
      <CardAdicionar adicionarTarefa={adicionarTarefa} />
    </>
  )
}

export default App
