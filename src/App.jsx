import React from "react";
import { CustomButton } from "./components/CustomBotton";
import { Console } from "./components/Console";
import { Col, Container, Row } from "react-bootstrap";
import './App.css'
import { calculateEQ } from "./components/equationCalculator";
export const App = () => {

  const [input, setInput] = React.useState('');
  const [result, setResult] = React.useState('');
  
  const calculatorButtons = [ '7', '8' ,'9', '/', '4', '5' ,'6', 'x', '1', '2' ,'3', '-', '0' ,'=', 'C', '+' ];
  
  const handleInput = (e) => {
    switch (e.target.value) {
      case '=' :
        setResult(calculateEQ(input));
        // console.log(calculateEQ(input));
        break;
      case 'C' :
        setInput('');
        break;
      default:
        setInput(input + e.target.value);
          break;
    }
  }

  return (
    <>
    <h1 class="text-center my-3">Simple Calculator Project</h1>
    <div className="app">
      <Container className="border rounded py-3">
        <Console input={input} result={result}/>
        <Row className="g-1">
        {
          calculatorButtons.map((btn, key)=>(
              <Col xs={3} key={key}>
                <CustomButton onClick={handleInput} value={btn} text={btn}/>
              </Col>
          ))
        }
        </Row>
      </Container>
    </div>
    </>
  )
}