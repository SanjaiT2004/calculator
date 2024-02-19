import React from 'react'
import { Button } from 'react-bootstrap';
const SubButton = (props) => {
    console.log(props);
    const sub = () => {
         if (props.data.result === "Give correct Divisor") {
          props.data.setColor("Green")
          props.data.setResult(Number(props.data.num1) - Number(props.data.num2))
        }
         else {
             props.data.setColor("Green")
             props.data.setResult(Number(props.data.num1) - Number(props.data.num2) + Number(props.data.result));
         }
        props.data.setNum1(0)
        props.data.setNum2(0)
    }
    return (
        <div>
            <Button onClick={sub} variant="outline-primary" className="ms-3 shadow"> Subtract </Button>
        </div>
    )
}
export default SubButton
