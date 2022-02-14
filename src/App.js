import React, {Component} from 'react'
class App extends Component{
  state = {
    cardapio: [
      {
        principal: "Arroz, feijão, bife, salada",
        sobremesa: "Gelatina de morango"
      },
      {
        principal: "Macarrão e almondegas",
        sobremesa: "Mousse de limão"
      },
      {
        principal: "Macarrão ao molho branco",
        sobremesa: "Mousse de maracuja"
      },
      {
        principal: "Arroz com feijão tropeiro",
        sobremesa: "Arroz doce"
      },
      {
        principal: "Risoto com frango a milanesa",
        sobremesa: "mousse de abacaxi"
      },
      {
        principal: "Arroz e lasanha 4 queijos",
        sobremesa: "Pudim"
      }
    ]
  }

  render(){
    return(
      <div>
        <ul>
          <h1>Cardápio</h1>
            {this.state.cardapio.map(prato => <li> {prato} </li>)}
        </ul>
      </div>
    )
  }
}

export default App

