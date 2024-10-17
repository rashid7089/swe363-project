import "./style.css";
import { useState } from "react";

function SignUp() {
    let [currentPage, setCurrentPage] = useState(0);
    // 0 = sign up, 1 = login
    let [title, setTitle] = useState("sign up");
    let [otherTitle, setOtherTitle] = useState("login");

    function changeToOtherPage() {
        setCurrentPage(currentPage == 0 ? 1 : 0);

        if (currentPage == 0) {
            setTitle("login");
            setOtherTitle("sign up");
        }
        else {
            setTitle("sign up");
            setOtherTitle("login");
        }
    }

    // condition ? true : false
    return ( 
        <div className="auth">
            <h1>{title}</h1>
            {currentPage == 1 ? <input placeholder="name" /> : ""}
            <input placeholder="username" />
            <input placeholder="password" />
            <button >submit</button>
            <button onClick={changeToOtherPage} >change to {otherTitle}</button>
        </div>
     );
}

export default SignUp;