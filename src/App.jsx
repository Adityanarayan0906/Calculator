import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/display";

function App() {
  const [calVal, setCalVal] = useState("");
  const onClick = (buttonText) => {
    if (buttonText === "C")
    {
      setCalVal("");
    } 
    else if (buttonText === "=") 
    {
      const result=eval(calVal);
      setCalVal(result);
    } 
    else {
      const newVal = calVal + buttonText;
      setCalVal(newVal);
    }
  };
  return (
    <center>
    <h1>Calculator using React</h1>
    <div className={styles.calculator}>
      <Display value={calVal} />
      <ButtonsContainer onButtonClick={onClick} />
    </div>
    </center>
  );
}

export default App;
