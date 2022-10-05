
import './App.css';

import {useState} from "react";
import {CounterComp} from "./comp/counter";
import {ButtonComp} from "./comp/button";

function App() {
  const [count, setCount]= useState(0);

  const handleInc=()=>{
     setCount(count+1);
  }
  const handleDec=()=>{
      setCount(count-1);
  }
  return (
    <div className="main">
      <CounterComp count={count} text={"The magical number is"}/>
      <ButtonComp onClick={handleInc} text={"Inc"}/>
      <ButtonComp onClick={handleDec} text={"Dec"}/>
    </div>
  );
}

export default App;
