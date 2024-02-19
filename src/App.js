import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container } from 'react-bootstrap';
function Calculator(){
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [result, setResult] = useState(0)
  const [color,setColor] = useState("")
  const add = () => {
    setColor("Green")
    if (result === "Give correct divisor")
      setResult(Number(num1) + Number(num2))
    else
      setResult(result => result + Number(num1) + Number(num2))
    resetinput()
  }
  const sub = () => {
    setColor("Green")
    if (result === "Give correct divisor")
      setResult(Number(num1) - Number(num2))
    else
      setResult(result => result + Number(num1) - Number(num2))
    resetinput()
  }
  const multiply = () => {
    setColor("Green")
    if (result === "Give correct divisor")
      setResult(Number(num1) * Number(num2))
    setResult(result => result + Number(num1) * Number(num2))
    resetinput()
  }
  const div = () => {
    if (Number(num2) === 0) {
      setColor("Red")
      setResult("Give correct divisor")  
    }
    else {
      setColor("Green")
      if (result === "Give correct divisor")
        setResult(0)
      setResult(result => result + Number(num1) / Number(num2))
      resetinput()
    }
  }
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
      <div>
        <Button onClick={add} variant="outline-primary" className="ms-3 shadow"> Add </Button>
        <Button onClick={sub} variant="outline-primary" className="ms-3 shadow"> Subtract </Button>
        <Button onClick={multiply} variant="outline-primary" className="ms-3 shadow"> Multiplication </Button>
        <Button onClick={div} variant="outline-primary" className="ms-3 shadow"> Division </Button>
        <Button onClick={resetinput} variant="outline-warning" className="ms-3 shadow"> Reset Inputs </Button>
        <Button onClick={resetresult} variant="outline-danger"  className="ms-3 shadow"> Reset Result </Button>
        </div>
    </div>
  );
}
export default Calculator;