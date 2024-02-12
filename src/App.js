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
    setResult(result => result + Number(num1) + Number(num2))
  }
  const sub = () => {
    setColor("Green")
    setResult(result => result + Number(num1) - Number(num2))
  }
  const multiply = () => {
    setColor("Green")
    setResult(result => result + Number(num1) * Number(num2))
  }
  const div = () => {
    if (Number(num2) == 0) {
      setColor("Red")
      setResult("Give correct divisor")  
    }
    else {
      setColor("Green")
      if (result == "Give correct divisor")
        setResult(0)
      setResult(result => result + Number(num1) / Number(num2))
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
    <div>
      <h1>Simple Calculator for Basic Arithmetic operation</h1>
      <Container>
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
        </Container>
    
      <h4>
  Result: <span style={{ color }}>{result}</span>
</h4>
      <div>
        <Button onClick={add} variant="outline-primary" className="ms-3"> Add </Button>
        <Button onClick={sub} variant="outline-primary" className="ms-3"> Subtract </Button>
        <Button onClick={multiply} variant="outline-primary" className="ms-3"> Multiplication </Button>
        <Button onClick={div} variant="outline-primary" className="ms-3"> Division </Button>
        <Button onClick={resetinput} variant="outline-warning" className="ms-3"> Reset Inputs </Button>
        <Button onClick={resetresult} variant="outline-danger"  className="ms-3"> Reset Result </Button>
      </div>
    </div>
  );
}
export default Calculator;