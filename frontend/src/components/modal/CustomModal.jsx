import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
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

            if (response && response.jwt) {

                localStorage.setItem('jwt', response.jwt);
                console.log('Login successful:', response);

                navigate('/volunteer-dashboard');
            } else {
                console.error('Login failed: Invalid response from server');
            }
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };

    
    return (
        <div>
            {/* <Modal show={show} onHide={onClose} centered className={type === 'register' ? 'custom-modal-wide' : 'custom-modal'}> */}
            <div className={type === 'register' ? 'custom-modal-wide' : 'custom-modal'}>
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
                                <Form.Group>
                                    <Form.Control type="phone" placeholder="Phone" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="city" placeholder="City" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="State" placeholder="State" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="zipcode" placeholder="Zipcode" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="daysOfWeekAvailable" placeholder="Days of week available" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        as="textarea"
                                        rows={4} 
                                        placeholder="Motivation"
                                        required
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" block>Register</Button>
                            </div>
                        )}
                    </Form>
                </Modal.Body>
            </Modal>
            </div>
        </div>
    );
};

export default CustomModal;
