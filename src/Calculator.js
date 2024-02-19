import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import AddButton from "./AddButton";
import SubButton from "./SubButton";
import MultiplyButton from "./MultiplyButton";
import DivideButton from "./DivideButton";
function Calculator(){
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [result, setResult] = useState(0)
  const [color,setColor] = useState("")

  const resetinput = () => {
    setNum1(0);
    setNum2(0);
  }
  const resetresult = () => {
    setResult(0)
  }
  return (
    <div className="Container-fluid">
      <h1>Simple Calculator for Basic Arithmetic operation</h1>
      
      <Form.Control
          type="number"
          value={num1}
          style={{ width: '100%', maxWidth: '300px' }}
          placeholder="Enter number 1"
          onChange={e => setNum1(e.target.value)}
        />
        <div><p></p></div>
        <Form.Control
          type="number"
          value={num2}
          style={{ width: '100%', maxWidth: '300px' }}
          placeholder="Enter number 2"
          onChange={e => setNum2(e.target.value)}
        />
       
    
      <h4>
  Result: <span style={{ color }}>{result}</span>
</h4>
      <div className="d-flex">
        <AddButton data={{ num1, num2, result,color, setResult, setNum1, setNum2,setColor }}></AddButton>
        <SubButton data={{ num1, num2, result,color, setResult, setNum1, setNum2,setColor }}></SubButton>
        <MultiplyButton data={{num1, num2, result,color, setResult, setNum1, setNum2,setColor}}></MultiplyButton>
        <DivideButton data = {{num1, num2, result,color, setResult, setNum1, setNum2,setColor}}></DivideButton>
        <Button onClick={resetinput} variant="outline-warning" className="ms-3 shadow"> Reset Inputs </Button>
        <Button onClick={resetresult} variant="outline-danger"  className="ms-3 shadow"> Reset Result </Button>
        </div>
    </div>
  );
}
export default Calculator;