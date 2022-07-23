import './App.css'
import Tabela from './components/index'
import { Horario } from './interface/horario';

function App() {
  const estadoApk : Horario[] = [
    {
      id: 1,
      dia: 'Segunda-feira',
      data: '20/07/2022',
      horaInicio: '8:00',
      horaAlmoco: '12:00',
      horaVolta: '13:00',
      horaSaida: '18:00'
    },
    {
      id: 2,
      dia: 'Terça-feira',
      data: '20/07/2022',
      horaInicio: '8:00',
      horaAlmoco: '12:00',
      horaVolta: '13:00',
      horaSaida: '18:00'
    }
  ];

  return (
    <div className="App">
      <h1>Folha de Ponto</h1>
      <div className='tables'>
        <Tabela estado={estadoApk}/>
      </div>
    </div>
  )
}

export default App
