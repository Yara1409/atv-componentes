import './App.scss';
import { useState } from 'react';
import Caberalho from './pages/componentes/caberalho';

function App() {

  const [contador,setcontador]=useState(0);
  const [descricao,setDescricao]=useState("Digite algo...");
  const [select, setSelect] = useState("Escolha uma opção")

    function Mais(){
      setcontador(contador + 1)
    }
    function Menos(){
      setcontador(contador - 1)
    }

   function Mudar(e) {
    let novotexto = e.target.value;
    setDescricao(novotexto);
  }

  function mudarSelect(e){
    let valor = e.target.value
    setSelect(valor)
  }


  return (
    <div className="tudo">
          <Caberalho titulo="dtdtdtddt"/>
    <div className="App">

      <button onClick={Mais}><h2>+</h2></button>
      <h2>{contador}</h2>
      <button onClick={Menos}><h2>-</h2></button>

    </div>
    <div className="ins">
       <h2>{descricao}</h2>


      <input type="text" onChange={Mudar} placeholder="Digite algo aqui..." />
      </div>

      <div className="ins">
       <h2>{select}</h2>


        <select onChange={mudarSelect}>
          <option value='oi'>Oi</option>
          <option value='yara'>Yara</option>
          <option value='AAAAAAAAAAAAAAAAA'>AAAAAAAAAAAAAAAAA</option>
          <option value='Gustavo'>Gustavo</option>
        </select>
      </div>
    </div>
    
  );
}

export default App;
