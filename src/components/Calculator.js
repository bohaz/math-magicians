import { useState } from 'react';
import './styles.css';
import CalculatorTitle from './AppTitle';
import calculate from '../logic/calculate';

function App() {
  const [currentOperand, setCurrentOperand] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setCurrentOperand((prevOperand) => calculate(prevOperand, buttonName));
  };

  return (
    <div>
      <CalculatorTitle />

      <div className="calculator-grid">
        <div className="output">
          <div className="current-operand">{currentOperand.next || currentOperand.total || '0'}</div>
        </div>
        <button type="button" onClick={() => handleClick('AC')}>AC</button>
        <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
        <button type="button" onClick={() => handleClick('%')}>%</button>
        <button type="button" className="orange" onClick={() => handleClick('÷')}>÷</button>
        <button type="button" onClick={() => handleClick('7')}>7</button>
        <button type="button" onClick={() => handleClick('8')}>8</button>
        <button type="button" onClick={() => handleClick('9')}>9</button>
        <button type="button" className="orange" onClick={() => handleClick('x')}>x</button>
        <button type="button" onClick={() => handleClick('4')}>4</button>
        <button type="button" onClick={() => handleClick('5')}>5</button>
        <button type="button" onClick={() => handleClick('6')}>6</button>
        <button type="button" className="orange" onClick={() => handleClick('-')}>-</button>
        <button type="button" onClick={() => handleClick('1')}>1</button>
        <button type="button" onClick={() => handleClick('2')}>2</button>
        <button type="button" onClick={() => handleClick('3')}>3</button>
        <button type="button" className="orange" onClick={() => handleClick('+')}>+</button>
        <button type="button" className="span-two" onClick={() => handleClick('0')}>0</button>
        <button type="button" onClick={() => handleClick('.')}>.</button>
        <button type="button" className="orange" onClick={() => handleClick('=')}>=</button>
      </div>

    </div>
  );
}

export default App;
