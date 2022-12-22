import React, {useState, useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const AddNewTransaction = () => {
    const {addTransaction} = useContext(GlobalContext);
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const onSubmit = (e) =>{
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 1000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
        setText(""); setAmount("");
    }
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." onChange={(e)=>{setText(e.target.value)}} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" placeholder="Enter amount..." onChange={(e)=>{setAmount(e.target.value)}} />
        </div>
        <button type="submit" className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddNewTransaction;
