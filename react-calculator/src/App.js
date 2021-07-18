import "./App.css";
import { useState, useEffect } from "react";

// Frin Tom kelly
function App() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;
    if (total) setPreState("");

    if (curState) {
      setCurState((pre) => pre + e.target.innerText);
    } else {
      setCurState(e.target.innerText);
    }
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState);
    console.log("pre - curState", curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);

  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };

  const onReset = (e) => {
    setPreState("");
    setCurState("");
    setInput("0");
  };

  const percent = (e) => {
    if (preState) {
      if (curState) {
        setCurState(String(parseFloat(curState) / 100) * preState);
      } else {
        setCurState(String(parseFloat(preState) / 100));
      }
    } else {
      setCurState(String(parseFloat(curState) / 100));
    }
  };

  const minusPlus = (e) => {
    if (curState.charAt(0) === "-") {
      console.log("pre - curState", curState);
      setCurState(curState.substring(1));
    } else {
      setCurState(`-${curState}`);
    }
  };

  const equals = (e) => {
    if (curState === "") return;

    if (e.target.innerText === "=") {
      setTotal(true);
    }

    let cal;

    switch (operator) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;
      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      case "X":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      default:
        return;
    }

    setInput("");
    setPreState(cal);
    setCurState("");

    console.log("Cal", cal, "Input", input, "PreState", preState);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">
          {input !== "" || input === "0" ? input : preState}
        </div>
        <div className="btn light-gray" onClick={onReset}>
          AC
        </div>
        <div className="btn light-gray" onClick={percent}>
          %
        </div>
        <div className="btn light-gray" onClick={minusPlus}>
          +/-
        </div>
        <div className="btn light-gray" onClick={operatorType}>
          /
        </div>
        <div className="btn" onClick={inputNum}>
          7
        </div>
        <div className="btn" onClick={inputNum}>
          8
        </div>
        <div className="btn" onClick={inputNum}>
          9
        </div>
        <div className="btn orange" onClick={operatorType}>
          X
        </div>
        <div className="btn" onClick={inputNum}>
          4
        </div>
        <div className="btn" onClick={inputNum}>
          5
        </div>
        <div className="btn" onClick={inputNum}>
          6
        </div>
        <div className="btn orange" onClick={operatorType}>
          +
        </div>
        <div className="btn" onClick={inputNum}>
          1
        </div>
        <div className="btn" onClick={inputNum}>
          2
        </div>
        <div className="btn" onClick={inputNum}>
          3
        </div>
        <div className="btn orange" onClick={operatorType}>
          -
        </div>
        <div className="btn zero" onClick={inputNum}>
          0
        </div>
        <div className="btn" onClick={inputNum}>
          .
        </div>
        <div className="btn orange" onClick={equals}>
          =
        </div>
      </div>
    </div>
  );
}

export default App;
