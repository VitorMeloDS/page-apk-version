import { Horario } from "../interface/horario";
import "./index.css";

type props = {
  estado: Horario[];
};

function Tabela({ estado }: props) {
  return (
    <table>
      <thead></thead>
      <tbody className='colun'>
        {estado?.map((ambiente) => {
          return (
            <div className='colun'>
              <td key={ambiente.id} >
                {ambiente?.dia}
                <tr><b>data: </b>{ambiente?.data}</tr>
                <tr><b>Entrada: </b>{ambiente?.horaInicio}</tr>
                <tr><b>Almoço: </b>{ambiente?.horaAlmoco}</tr>
                <tr><b>Volta: </b>{ambiente?.horaVolta}</tr>
                <tr><b>Saída: </b>{ambiente?.horaSaida}</tr>
              </td>
            </div>
          );
        })}
      </tbody>
    </table>
  );
}

export default Tabela;
