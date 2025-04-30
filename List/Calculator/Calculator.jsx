import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false); 
  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} />
          </div>
          <div>
            <input 
            type="button" 
            value="AC" 
            style={{ background: "red" }} 
            onClick={(e) => setValue("")} />
            <input
              type="button"
              value="DE"
              onClick={(e) => setValue(value.slice(0, -1))}
            />
            <input
              type="button"
              value="."
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="/"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="7"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="8"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="9"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="*"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="4"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="5"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="6"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="+"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="1"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="2"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="3"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="-"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="00"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="0"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="="
              onClick={(e) => setValue(eval(value))}
            />
            <input
              type="button"
              value="open"
              onClick={(e) => setShow((prev) => !prev)}
            />
          </div>
          <div>
            <input
                type="button"
                value="("
                onClick={(e) => setValue(value + e.target.value)}
            />
            <input
                type="button"
                value=")"
                onClick={(e) => setValue(value + e.target.value)}
            />
            <input
                type="button"
                value="%"
                className="operator"
                onClick={(e) => setValue(value + e.target.value)}
            />
            <input
                type="button"
                value="π"
                className="operator"
                onClick={(e) => setValue(value + Math.PI)}
            />


          </div>
          {show && (
            <div>
              <input
                type="button"
                value="log"
                onClick={() => setValue(Math.log10(eval(value)))}
              />
              <input
                type="button"
                value="tan"
                onClick={() => setValue(Math.tan(eval(value)))}
              />
              <input
                type="button"
                value="sin"
                onClick={() => setValue(Math.sin(eval(value)))}
              />
              <input
                type="button"
                value="cos"
                onClick={() => setValue(Math.cos(eval(value)))}
              />
            </div>
      
          )}
        </form>
      </div>
    </div>
  );
}
export default Calculator;
