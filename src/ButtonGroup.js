import React from "react"
import {store} from "./store"
import {withdraw} from "./actions"
import {bankruptcy} from "./actions"
import "./App.css";

const ButtonGroup = ({ withdraw }) => (
  <div className="App__buttons">
   {withdraw.map((amount, i) => (
     <button
       data-amount={amount.replace(',', '').match(/[+-]?\d+(?:\.\d+)?/g).map(Number)}
       key={i}
       className="hello-btn"
       onClick={dispatchBtnAction}
     >
       {amount}
     </button>
   ))}
   <p className="App__giveaway"
   onClick={dispatchGiveAway}
   >Give away all your cash to charity</p>
 </div>
)

function dispatchBtnAction (e) {
 const amount = e.target.dataset.amount;
 console.log("e-target", e.target.dataset.amount)
 store.dispatch(withdraw(amount));
}

function dispatchGiveAway () {
  store.dispatch(bankruptcy())
}

export default ButtonGroup;
