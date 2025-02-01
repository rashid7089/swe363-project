import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { registerUser as registerUserRequest } from '../../functions/authRequests';
import { useNavigate } from 'react-router-dom';

function LoginForm({ validated }) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        kfupmID: '',
        email: '',
        password: '',
        rePassword: '',
        usertype: 'student'
    });

    const fillForm = () => {
        const random = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        setForm({
            name: 'Mohammed Ahmed',
            kfupmID: `2200${random}0`,
            email: `Mohammed${random}@gmail.com`,
            password: `Password${random}`,
            rePassword: `Password123`,
            usertype: 'student'
        });
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // name, email, password, usertype
        const { name, kfupmID, email, password, rePassword, usertype } = form;
        if (password !== rePassword) {
            alert('Passwords do not match');
            return;
        }
        
        // send request
        registerUserRequest(name, email, password, usertype, kfupmID)
            .then((response) => {
                console.log(response);
                if (response.status === 201) {
                    alert('User registered successfully');
                    navigate('/login');
                }
                else {
                    alert(response.data.message);
                }
            })
            .catch((error) => {
                console.error(error);
                alert('Invalid email or password');
            });
    };

    return ( 
        <Form className="auth__form" noValidate validated={validated} onSubmit={handleSubmit} >
            <h1>Sign Up</h1>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control size="md" type="text" value={form.name} name="name" onChange={handleChange} required placeholder="Ahmed" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label>User Type</Form.Label>
                <Form.Select value={form.usertype} aria-label="Default select example" size="md" type="text" name="usertype" onChange={handleChange} required >
                    <option disabled>select usertype</option>
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label>KFUPM Id</Form.Label>
                <Form.Control value={form.kfupmID} size="md" type="text" required name="kfupmID" onChange={handleChange} placeholder="your KFUPM Id" />
                <Form.Control.Feedback type="invalid">
                    the id is already used
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control value={form.email} size="md" type="email" name="email" onChange={handleChange} required placeholder="name@example.com" />
                <Form.Control.Feedback type="invalid">
                    the email is incorrect
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control value={form.password} size="md" type="password" required name="password" onChange={handleChange} />
                <Form.Control.Feedback type="invalid">
                    password must be 8 char and contain atleast 1 uppercase letter
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Verify Password</Form.Label>
                <Form.Control value={form.rePassword} size="md" type="password" required name="rePassword" onChange={handleChange} />
                <Form.Control.Feedback type="invalid">
                    password doesn&#39;t match
                </Form.Control.Feedback>
            </Form.Group>
            
            
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <button className="auth__form__submit btn btn-primary" >Create An Account</button>
            </Form.Group>
            <Form.Group className="my-2" controlId="exampleForm.ControlInput1">
                have an account?  <Link to='/login'>Login</Link>
            </Form.Group>

            <button style={{position:'fixed', maxWidth: 100, left: 10, bottom: 10, textAlign:"center"}} type='button' className="btn btn-secondary" onClick={fillForm} >
                auto fill
            </button>
        </Form>
     );
}

LoginForm.propTypes = {
    
    validated: PropTypes.bool,
    handleSubmit: PropTypes.func
}

export default LoginForm;
