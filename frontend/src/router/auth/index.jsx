import { useState, useEffect } from "react";
import './style.css';
import LoginForm from "./loginForm";
import SignUpForm from "./signupForm";
import ResetPassword from "./resetPassword";
import { useLocation } from 'react-router-dom';

function Auth({ setSelectedPage }) {
  const [validated, setValidated] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  let location = useLocation();

  useEffect(() => {
    if (setSelectedPage === "signup") {
      setCurrentPageIndex(1);
    } else if (setSelectedPage === "forget-password") {
      setCurrentPageIndex(2);
    } else {
      setCurrentPageIndex(0);
    }
  }, [setSelectedPage, location]);

  const handleSubmitLogin = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

    }
    
    setValidated(true);
  };



  return (
    <div className="auth">
      {currentPageIndex === 0 && <LoginForm validated={validated} handleSubmit={handleSubmitLogin} />}
      {currentPageIndex === 1 && <SignUpForm validated={validated} handleSubmit={handleSubmitLogin} />}
      {currentPageIndex === 2 && <ResetPassword validated={validated} handleSubmit={handleSubmitLogin} />}
    </div>
  );
}

export default Auth;
