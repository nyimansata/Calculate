import { useState } from "react";

function Calculator() {
    // state
    const[result, setResult] = useState('');

    // Button Item
    const HandleButton = (e) => {
        setResult(result + (e.target.name))
    };

    // Evaluate
    const Evaluate = () => {
        try{
            setResult(eval(result).toString())
        }catch(error){
            setResult('error from evaluation')
        }
    };

    // Delete by One
    const Delete = () => {
        setResult(result.slice(0, result.length -1))
    };

    // DeleteAll
    const DeleteAll = () =>{
        setResult('')
    };

    return(
        <>
        <h1 className="text">Play The Game</h1>
        <div className="Container">
            {/* input form */}
            <form>
                <input type='text' value={result}/>
            </form>
            {/* buttons */}
            <div className="keys">
                <button className="clearAll" onClick={DeleteAll}>Ac</button>
                <button className="clear" onClick={Delete}>C</button>
                <button name="/" onClick={HandleButton}>&divide;</button>
                <button name="7" onClick={HandleButton}>7</button>
                <button name="8" onClick={HandleButton}>8</button>
                <button name="9" onClick={HandleButton}>9</button>
                <button name="*" onClick={HandleButton}>&times;</button>
                <button name="4" onClick={HandleButton}>4</button>
                <button name="5" onClick={HandleButton}>5</button>
                <button name="6" onClick={HandleButton}>6</button>
                <button name="-" onClick={HandleButton}>&ndash;</button>
                <button name="1" onClick={HandleButton}>1</button>
                <button name="2" onClick={HandleButton}>2</button>
                <button name="3" onClick={HandleButton}>3</button>
                <button name="+" onClick={HandleButton}>+</button>
                <button name="0" onClick={HandleButton}>0</button>
                <button name="." onClick={HandleButton}>.</button>
                <button className="equal" onClick={Evaluate}>=</button>
            </div>
        </div>
        </>
    )
}
export default Calculator;