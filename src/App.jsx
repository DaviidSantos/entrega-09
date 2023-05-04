import './App.css'
import Input from './components/Input'

function App() {
  return (
    <>
      <div className='container'>
        <form>
          <Input placeholder="Nome" type="text"/>
          <Input placeholder="Email" type="email"/>
          <Input placeholder="Telefone" type="text"/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  )
}

export default App
