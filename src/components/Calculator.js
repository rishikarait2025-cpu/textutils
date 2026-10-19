import React, { useState } from 'react'
import '../Calculator.css';
export default function Calculator() {
    const [input, setInput]=useState('');
    // const [bgColor, setBgColor]=useState('#f9f9f9');

    // useEffect(()=>{
    //   document.body.style.backgroundColor = bgColor;
    // })

    const handleClick=(value)=>{
      setInput(input+value);
    };

    const calculate =()=>{
      try{
      setInput(eval(input).toString());
      }catch{
        setInput('Error');
      }
    }

    const handleBackspace=()=>{
      setInput(input.slice(0,-1));
    }
    const clear=()=>{
      setInput('');
    }

  return (
    <>
    
      <div>
        <input type="text" value={input} readOnly></input>

      </div>
      <div className="butttons">

        <button className='' onClick={handleBackspace}>⌫</button>
        <button className='' onClick={clear}>Clear</button>

        <button className='' onClick={()=>handleClick('7')}>7</button>
        <button className='' onClick={()=>handleClick('8')}>8</button>
        <button className='' onClick={()=>handleClick('9')}>9</button>
        <button className='' onClick={()=>handleClick('/')}>/</button>

        <button className='' onClick={()=>handleClick('4')}>4</button>
        <button className='' onClick={()=>handleClick('5')}>5</button>
        <button className='' onClick={()=>handleClick('6')}>6</button>
        <button className='' onClick={()=>handleClick('*')}>*</button>

        <button className='' onClick={()=>handleClick('1')}>1</button>
        <button className='' onClick={()=>handleClick('2')}>2</button>
        <button className='' onClick={()=>handleClick('3')}>3</button>
        <button className='' onClick={()=>handleClick('-')}>-</button>
        <button className='' onClick={()=>handleClick('0')}>0</button>
        <button className='' onClick={()=>handleClick('.')}>.</button>
        <button className='' onClick={calculate}>↵</button>
        <button className='' onClick={()=>handleClick('+')}>+</button>
        
      </div>
      </>
  )
}
