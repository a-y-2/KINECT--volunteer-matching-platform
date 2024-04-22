import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios'; // Import Axios
import './CustomModal.css'; // Import the CSS file for styling
import BackendService from '../../services/BackendService';


const backendService = new BackendService();

const CustomModal = ({ type, show, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await backendService.login(email, password);
            localStorage.setItem('jwt', response.jwt);
            console.log('Login successful:', response);
            
            // Redirect to /volunteer-dashboard on successful login
            navigate('/volunteer-dashboard');
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };

    return (
        <div className='overlay'>
            <Modal show={show} onHide={onClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{type === 'login' ? 'Login' : 'Register'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        {type === 'login' && (
                            <div className="form-container">
                                <Form.Group> 
                                    <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </Form.Group>
                                <div className="button-container text-center">
                                    <Button variant="primary" type="submit" block>Login</Button>
                                    <hr />
                                    <Button variant="danger" block>Login with Google</Button>
                                </div>
                            </div>
                        )}
                        {type === 'register' && (
                            <div className="form-container">
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Full Name" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Email" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="password" placeholder="Password" required />
                                </Form.Group>
                                {/* Add additional fields for registration */}
                                <Button variant="primary" type="submit" block>Register</Button>
                            </div>
                        )}
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default CustomModal;
