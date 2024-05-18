import React, { useState } from 'react';
import CustomModal from '../../../components/modal/CustomModal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'; // Import Carousel component
import './Volunteer.css';

const Volunteer = () => {
    const [modalType, setModalType] = useState('');
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const handleShowVolunteerLoginModal = () => {
        setShowLoginModal(true);
        setModalType('volunteer-login');
    };
    
    const handleShowVolunteerRegisterModal = () => {
        setShowRegisterModal(true);
        setModalType('volunteer-registration');
    };

    const handleShowNpoLoginModal = () => {
        setShowLoginModal(true);
        setModalType('npo-login');
    };
    
    const handleShowNpoRegisterModal = () => {
        setShowRegisterModal(true);
        setModalType('npo-registration');
    };
    

    const handleCloseModal = () => {
        setShowLoginModal(false);
        setShowRegisterModal(false);
    };

    return (
        <div className="volunteer-page bg-gray-100 min-h-screen">

            {/* Container for the image overlay */}
            <div className="overlay-container">
                {/* Background image with hazy blurred overlay */}
                <img src="/assets/art.jpg" alt="Background" className="background-image" />
                {/* Text element with your motto */}
                <div className="motto-text">
                    <p>Join us in changing the world for better, one day at a time!</p>
                    <p></p>
                </div>
            </div>

            <div className="carousel">
                <Carousel interval={null} indicators={false} showArrows={true} controls={true} className="my-carousel">
                    <Carousel.Item>
                        <div className="carousel-image-container">
                            <img src="/assets/donation.jpg" className="carousel-img" alt="Image 1"/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-image-container">
                            <img src="/assets/hands.jpg" className="carousel-img" alt="Image 3"/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-image-container">
                            <img src="/assets/ocg-saving-the-ocean.jpg" className="carousel-img" alt="Image 4"/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-image-container">
                            <img src="/assets/old.jpg" className="carousel-img" alt="Image 5"/>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="container mx-auto py-12 px-4">
                <div className="grid m-10 grid-cols-1 gap-8">
                    <div className="volunteer-content text-center">
                        <h2 className="text-2xl font-semibold mb-4">Volunteering is the heartbeat of communities</h2>
                        <p className="mb-4">
                            A symphony of selflessness and generosity that uplifts spirits and transforms lives. It's a powerful force for change, driven by individuals who give their time, skills, and passion to make a difference. Whether it's lending a hand to those in need, protecting the environment, or advocating for social justice, volunteers are the unsung heroes shaping a brighter tomorrow. Ready to be part of something bigger?
                        </p>
                        <p className="mb-4">
                            Want to be a part of us?
                        </p>
                        {/* Your content */}                      
                            <div className="content-holder">
                                <div className="vol-join w-full md:w-1/2 pr-0 md:pr-2 border-r-0 md:border-r-2 flex flex-col items-center md:items-start">
                                    <p className="vol-heading text-center md:text-left mb-2">Join as volunteer</p>
                                    <div className="flex justify-center md:justify-start mb-4 md:mb-0">
                                        <Button
                                            className="bg-yellow-200 hover:bg-indigo-100 mr-4 volunteer-button"
                                            onClick={handleShowVolunteerRegisterModal}
                                        >
                                            Register
                                        </Button>
                                        <Button
                                            className="bg-blue-500 hover:bg-blue-100 volunteer-button"
                                            onClick={handleShowVolunteerLoginModal}
                                        >
                                            Login
                                        </Button>
                                    </div>
                                </div>
                                <div className="npo-join w-full md:w-1/2 pl-0 md:pl-2 flex flex-col items-center md:items-start">
                                    <p className="npo-heading text-center md:text-left mb-2">Join as npo</p>
                                    <div className="flex justify-center md:justify-start">
                                        <Button
                                            className="bg-yellow-200 hover:bg-indigo-100 mr-4 volunteer-button"
                                            onClick={handleShowNpoRegisterModal}
                                        >
                                            Register
                                        </Button>
                                        <Button
                                            className="bg-blue-500 hover:bg-blue-100 volunteer-button"
                                            onClick={handleShowNpoLoginModal}
                                        >
                                            Login
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        {/* Render the modals */}
                        <CustomModal type={modalType} show={showLoginModal || showRegisterModal} onClose={handleCloseModal} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;
