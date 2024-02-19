import React from 'react'
import { Button } from 'react-bootstrap';

const MultiplyButton = (props) => {
    const multiply = () => {
        if (props.data.result === "Give correct Divisor") {
            props.data.setColor("Green")
            props.data.setResult(Number(props.data.num1) * Number(props.data.num2))
      }
        else {
          props.data.setColor("Green")
          props.data.setResult(Number(props.data.num1) * Number(props.data.num2) + Number(props.data.result));
      }
        props.data.setNum1(0)
        props.data.setNum2(0)
  }
  return (
    <div>
          <Button onClick={multiply} variant="outline-primary" className="ms-3 shadow"> Multiply </Button>
    </div>
  )
}

export default MultiplyButton
