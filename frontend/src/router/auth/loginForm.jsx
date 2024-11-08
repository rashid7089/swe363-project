import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const initialDatabase = [
    { email: 'user1@example.com', password: 'Password1', status: 'senior' },
    { email: 'user2@example.com', password: 'Password2', status: 'senior' },
    { email: 'hacker', password: '1', status: 'senior' },

];

function LoginForm({ validated, handleSubmit }) {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value; // Assuming email is the first input
        const password = e.target[1].value; // Assuming password is the second input

        const user = initialDatabase.find(user => user.email === email && user.password === password);

        if (user) {
            navigate('/home');
        } else {
            handleSubmit(e); // Call the passed handleSubmit function if you want additional logic
            alert('Invalid email or password');
        }
    };

    return ( 
        <Form className="auth__form" noValidate validated={validated} onSubmit={onSubmit}>
            <h1>Login</h1>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control size="md" type="email" required placeholder="name@example.com" />
                <Form.Control.Feedback type="invalid">
                    The email is incorrect
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Password <Link to='/forget-password'>Forget password?</Link></Form.Label>
                <Form.Control size="md" type="password" required />
                <Form.Control.Feedback type="invalid">
                    Password must be 8 characters and contain at least 1 uppercase letter
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <button className="auth__form__submit btn btn-primary">Sign In</button>
            </Form.Group>
            <Form.Group className="my-2" controlId="exampleForm.ControlInput1">
                Don&#39;t have an account? <Link to='/signup'>Sign up</Link>
            </Form.Group>
        </Form>
    );
}

LoginForm.propTypes = {
    validated: PropTypes.bool,
    handleSubmit: PropTypes.func
}

export default LoginForm;
