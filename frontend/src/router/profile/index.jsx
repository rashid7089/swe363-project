import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { updateUser, deleteUser } from '../../functions/authRequests';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '../../functions/authRequests';
import './style.css';

function UserProfile({ validated }) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        kfupmID: '',
        email: '',
        password: '',
        usertype: ''
    });
    const [originalForm, setOriginalForm] = useState({
        name: '',
        kfupmID: '',
        email: '',
        password: '',
        usertype: ''
    });
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        // load user profile
        // get localstorage token
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        if (!token || !userId) {
            alert('You need to login first');
            navigate('/login');
            return;
        }

        getUserProfile(userId, token)
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    const { name, email, kfupmID, usertype } = response.data;
                    setForm({ name, email, kfupmID, usertype });
                    setOriginalForm({ name, email, kfupmID, usertype });
                }
                else {
                    alert('An error occurred');
                }
            })
        .catch((error) => {
            console.error(error);
        });
    }, []);


    const checkIfChanged = () => {
        const { name, email, usertype, kfupmID } = form;
        const { name: originalName, email: originalEmail, usertype: originalUsertype, kfupmID:originalkfupmID } = originalForm;
        if (name !== originalName || email !== originalEmail || usertype !== originalUsertype || kfupmID !== originalkfupmID) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        checkIfChanged();
    };

    const handleSubmit = (e) => {
        e.preventDefault();        
        // send request
        updateUser(localStorage.getItem('userId'), form, localStorage.getItem('token'))
        .then((response) => {
            if (response.status === 200) {
                alert('Profile updated successfully');
                location.reload();
                return;
            }
            else {
                alert('An error occurred');
            }
        })
        .catch((error) => {
            console.error(error);
            alert('An error occurred');
        });
    };

    const deleteAccount = () => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if (!token || !userId) {
            alert('You need to login first');
            navigate('/login');
            return;
        }
        if (window.confirm('Are you sure you want to delete your account?')) {
            deleteUser(userId, token)
                .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        alert('Account deleted successfully');
                        localStorage.removeItem('token');
                        localStorage.removeItem('userId');
                        navigate('/login');
                    }
                    else {
                        alert('An error occurred');
                    }
                })
                .catch((error) => {
                    console.error(error);
                    alert('An error occurred');
                });
        }
    }

    return ( 
        <div className='profile'>
            <Form className="auth__form" noValidate validated={validated} onSubmit={handleSubmit} >
                <h1>Profile</h1>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control size="md" type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Ahmed" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label>User Type</Form.Label>
                    <Form.Select disabled aria-label="Default select example" value={form.usertype} size="md" type="text" name="usertype" onChange={handleChange} required >
                        <option disabled>select usertype</option>
                        <option value="student">Student</option>
                        <option value="faculty">Faculty</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label>KFUPM Id</Form.Label>
                    <Form.Control size="md" type="text" required name="kfupmID" value={form.kfupmID} onChange={handleChange} placeholder="your KFUPM Id" />
                    <Form.Control.Feedback type="invalid">
                        the id is already used
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control size="md" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="name@example.com" />
                    <Form.Control.Feedback type="invalid">
                        the email is incorrect
                    </Form.Control.Feedback>
                </Form.Group>
                
                
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <button className="auth__form__submit btn btn-primary" disabled={disabled} >Update Details</button>
                    <button type='button' onClick={() => deleteAccount()} className="auth__form__submit btn btn-primary" style={{backgroundColor:"#dc3545"}} >Delete My Account</button>
                </Form.Group>
            </Form>
        </div>
     );
}

UserProfile.propTypes = {
    
    validated: PropTypes.bool,
    handleSubmit: PropTypes.func
}

export default UserProfile;
