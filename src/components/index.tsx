import './index.css'

type props = {
  estado: string
}

function Tabela({estado}: props){
  return (
    <div className='tbVersao'>
      <table>
        <td className='colun'>{estado}
          <tr>APK versão 1.0.0
          <input type="file" />
          <a href='link/arquivo' download='nome-do-arquivo.txt'>Baixe o Apk</a>
          </tr>
          <tr>APK versão 1.0.1</tr>
          <tr>APK versão 1.0.2</tr>
        </td>
      </table>
    </div>
  )
}

export default Tabela;