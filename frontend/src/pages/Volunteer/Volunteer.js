import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Volunteer.css';
import Button from '../../components/button/Button';
import Modal from '../../components/modal/Modal.jsx'

const Volunteer = () => {

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    return (
        <div className="volunteer-page">
            <div className='content'>
                <div className="images-holder">
                    <div className="images">
                        <img className='donation' src="/assets/donation.jpg" alt="donation" />
                        <img className='helping-hand' src="/assets/hand2.jpg" alt="helping-hand" />
                        <img className='ocean' src="/assets/ocg-saving-the-ocean.jpg" alt="ocean" />
                        <img className='old' src="/assets/old.jpg" alt="old" />
                    </div>
                </div>
                <div className="volunteer-content">
                    <h2>Volunteering is the heartbeat of communities</h2>
                    <p>
                        A symphony of selflessness and generosity that uplifts spirits and transforms lives. It's a powerful force for change, driven by individuals who give their time, skills, and passion to make a difference. Whether it's lending a hand to those in need, protecting the environment, or advocating for social justice, volunteers are the unsung heroes shaping a brighter tomorrow. Ready to be part of something bigger?
                    </p>
                    <p>
                        Join us in our mission to create positive change. Together, we can make an impact that reverberates far beyond ourselves.
                    </p>
                    <p>
                        <strong>Wanna be a volunteer? Join us - Click the Register button and let's embark on this journey together.</strong>
                    </p>
                    <div className="button-container">
                        {/* <Button to="/register" className="register-button">Register</Button> */}
                        <button className="button register-button" onClick={() => setShowRegisterModal(true)}>Register</button>
                        <button className="button login-button" onClick={() => setShowLoginModal(true)}>Login</button>
                 </div>
                 {showLoginModal && <Modal type="login" onClose={() => setShowLoginModal(false)} />}
                 {showRegisterModal && <Modal type="register" onClose={() => setShowRegisterModal(false)} />}
                </div>
            </div>
        </div>
    );
};

export default Volunteer;
