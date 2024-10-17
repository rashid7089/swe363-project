import "./style.css";
import { useState } from "react";

function SignUp() {
    // let value = 10;
    let [count, setCount] = useState(10);

    function add() {
        // value++;
        setCount(count+1)
    }
    // condition ? true : false
    return ( 
        <div>
            <h1>Sign Up {count}</h1>
            <input placeholder="username" />
            <button onClick={add}>add</button>
        </div>
     );
}

export default SignUp;