import React, { Component } from "react";
import { store } from "./store"
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
import ButtonGroup from "./ButtonGroup"

class App extends Component {
  /*
  state = {
    username: "Janny",
    totalAmount: 2500701
  };
  */
  render() {
    //const { totalAmount, username } = this.state;
    const getTotalFromStore = store.getState().totalAmount
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {store.getState().username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(getTotalFromStore<0?"You owe us money!":getTotalFromStore===0?"No money in account":getTotalFromStore)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <ButtonGroup withdraw={
            ["WITHDRAW $2500701","WITHDRAW $5,000"]
            }/>
          {/*<button data-amount="10000">WITHDRAW $10,000</button>*/}
          {/*<button data-amount="5000">WITHDRAW $5,000</button>*/}
        </section>

        {/*<p className="App__giveaway">Give away all your cash to charity</p>*/}
      </div>
    );
  }
}

export default App;
