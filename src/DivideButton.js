import React from 'react'
import { Button } from 'react-bootstrap';

const DivideButton = (props) => {
  console.log(props);
    const divide = () => {
        if (Number(props.data.num2) === 0) {
            props.data.setColor("Red")
          props.data.setResult("Give correct Divisor")
          props.data.setNum1(0)
        props.data.setNum2(0)
        }
        else {
          if (props.data.result === "Give correct Divisor") {
              props.data.setColor("Green")
              props.data.setResult(Number(props.data.num1) / Number(props.data.num2))
            }
            else
            {
              props.data.setColor("Green")
              props.data.setResult(Number(props.data.num1) / Number(props.data.num2) + Number(props.data.result));
            }
        }
        props.data.setNum1(0)
        props.data.setNum2(0)
  }
  return (
    <div>
          <Button onClick={divide} variant="outline-primary" className="ms-3 shadow"> Division </Button>
    </div>
  )
}

export default DivideButton
