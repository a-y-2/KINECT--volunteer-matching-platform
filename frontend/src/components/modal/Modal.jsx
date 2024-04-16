import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Modal.css';

const Modal = ({ type, onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSignInWithGoogle = () => {
        // Implement Google sign-in functionality
    };

    const handleSubmit = () => {
        // Handle form submission based on the type (login or register)
        if (type === 'login') {
            // Handle login form submission
            history.push('/vol-dashboard');
            console.log('Logging in:', { username, password });
        } else if (type === 'register') {
            // Handle register form submission
            console.log('Registering:', { username, email, password });
        }
        onClose(); // Close the modal after submission
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-btn" onClick={onClose}>X</button>
                { type === 'login' && (
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                )}
                {type === 'login' && (
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                )}
                {type === 'register' && (
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                )}
                <button className="submit-btn" onClick={handleSubmit}>{type === 'login' ? 'Login' : 'Register'}</button>
                <p className="or-text">OR</p>
                <button className="google-btn" onClick={handleSignInWithGoogle}>
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Modal;
