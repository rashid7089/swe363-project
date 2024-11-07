import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LoginForm({ validated, handleSubmit }) {
    return ( 
        <Form className="auth__form" noValidate validated={validated} onSubmit={handleSubmit} >
                <h1>Login</h1>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control size="md" type="email" required placeholder="name@example.com" />
                <Form.Control.Feedback type="invalid">
                    the email is incorrect
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Password <Link to='/forget-password'>forget password ?</Link></Form.Label>
                <Form.Control size="md" type="password" required />
                <Form.Control.Feedback type="invalid">
                    password must be 8 char and contain atleast 1 uppercase letter
                </Form.Control.Feedback>
            </Form.Group>
            
            
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <button className="auth__form__submit btn btn-primary" >Sign In</button>
            </Form.Group>
            <Form.Group className="my-2" controlId="exampleForm.ControlInput1">
                Don&#39;t have an account?  <Link to='/signup'>Sign up</Link>
            </Form.Group>
        </Form>
     );
}

LoginForm.propTypes = {
    validated: PropTypes.bool,
    handleSubmit: PropTypes.func
}

export default LoginForm;