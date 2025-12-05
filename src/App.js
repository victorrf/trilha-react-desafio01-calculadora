
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from "./styles";
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('');
    setFirstNumber('');
    setOperation('');
  };

  const handleAddNumber = (num) => {
      setCurrentNumber(prev => `${prev}${num}`);
  }

  const handleSumNumbers = () => {

    if(firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('+');
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('');
      setOperation('');
    }
  }

  const handleMinusNumbers = () => {

    if(firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('-');
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('');
      setOperation('');
    }
  }

  const handleDivNumbers = () => {

    if(firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('÷');
    }else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('');
      setOperation('');
    }
  }

  const handleMultNumbers = () => {

    if(firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('×');
    }else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('');
      setOperation('');
    }
  }

  const handleEquals = () => {

    if(firstNumber !== '' && operation !== '' && currentNumber !== '') {
      switch(operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '÷':
          handleDivNumbers();
          break;
        case '×':
          handleMultNumbers();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="×" onClick={handleMultNumbers}/>
          <Button label="÷" onClick={handleDivNumbers}/>
          <Button label="-" onClick={handleMinusNumbers}/>
          <Button label="C" onClick={handleOnClear}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
