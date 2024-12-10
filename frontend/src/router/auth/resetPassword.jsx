import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm({ validated }) {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // email, password
        // const { name, id, email, password, rePassword, usertype } = form;
        // if (password !== rePassword) {
        //     alert('Passwords do not match');
        //     return;
        // }
        
        // // send request
        // registerUserRequest(name, email, password, usertype)
        //     .then((response) => {
        //         console.log(response);
        //         if (response.status === 201) {
        //             alert('User registered successfully');
        //             navigate('/login');
        //         }
        //         else {
        //             alert(response.data.message);
        //         }
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //         alert('Invalid email or password');
        //     });
        alert("form submitted");
        navigate('/login');
    };

    return ( 
        <Form className="auth__form" noValidate validated={validated} onSubmit={handleSubmit} >
            <h1>Forget Password</h1>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control size="md" type="email" required name='email' onChange={handleChange} placeholder="name@example.com" />
                <Form.Control.Feedback type="invalid">
                    the email is incorrect
                </Form.Control.Feedback>
            </Form.Group>
            
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <button className="auth__form__submit btn btn-primary" >Send An Email</button>
            </Form.Group>
            <Form.Group className="my-2" controlId="exampleForm.ControlInput1">
                Did you remember it?  <Link to='/login'>Login Now</Link>
            </Form.Group>
        </Form>
     );
}

LoginForm.propTypes = {
    validated: PropTypes.bool,
    handleSubmit: PropTypes.func
}

export default LoginForm;