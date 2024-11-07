import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LoginForm({ validated, handleSubmit }) {
    return ( 
        <Form className="auth__form" noValidate validated={validated} onSubmit={handleSubmit} >
            <h1>Forget Password</h1>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control size="md" type="email" required placeholder="name@example.com" />
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