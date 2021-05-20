import { useState, Fragment } from 'react'
import './App.css';

const pratos = [
  {
    nome: "Dobradinha", preco: 25
  },
  {
    nome: "Feijoada", preco: 20
  },
  {
    nome: "Moqueca", preco: 74
  }
]

const Prato = ({ nome, preco, quantidade = 0, setQuantidade }) => {
  return (
    <>
      {nome }
      <br />
      <input type="number" min={0} value={quantidade} onChange={(ev) => setQuantidade(ev.target.valueAsNumber)} />{" "} &times; R${preco} = R${quantidade * preco}
    </>
  )
}

function App() {

  const [quantidades, setQuantidades] = useState({})
  pratos.sort((p1, p2) => (quantidades[p2.nome] || 0) - (quantidades[p1.nome] || 0))

  return (

    <Fragment>

      <h1>Cardápio</h1>
      
      <ul>
        { pratos.map((prato) =>
          <li key={prato.nome}>
            <Prato
              nome={ prato.nome }
              preco={ prato.preco }
              quantidade={quantidades[prato.nome] || 0}
              setQuantidade={ (quantidade) =>
                setQuantidades((quantidades) => ({ ...quantidades, [prato.nome]: quantidade }))}/>
          </li>)
        }
      </ul>

    </Fragment>
  );
}

export default App;
