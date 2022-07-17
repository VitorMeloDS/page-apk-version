import './App.css'
import Tabela from './components/index'

function App() {
  const estadoApk = ['Desenvolvimento', 'Homologação', 'Produção'];

  return (
    <div className="App">
      <h1>Hello Word</h1>
      <div className='tables'>
        <Tabela estado={estadoApk[0]}/>
        <Tabela estado={estadoApk[1]}/>
        <Tabela estado={estadoApk[2]}/>
      </div>
    </div>
  )
}

export default App
