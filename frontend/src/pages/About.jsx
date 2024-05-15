import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
    return (
        <div className="about-page">
            <div className="about-content">
                <h2>Welcome to Kinect!</h2>
                <p>
                    At Kinect, we believe in the power of volunteering to transform lives and communities. Our platform serves as a bridge, connecting passionate volunteers with meaningful opportunities to make a difference.
                </p>
                <h3>Our Mission</h3>
                <p>
                    Our mission is simple yet profound: to inspire and empower individuals to volunteer their time and skills for causes they care about. We strive to create a world where everyone has the opportunity to contribute positively to society, fostering a culture of compassion, empathy, and service.
                </p>
                <h3>How It Works</h3>
                <p>
                    Kinect makes volunteering accessible and convenient for both volunteers and organizations. Here's how it works:
                </p>
                <ul className="how-it-works">
                    <li><strong>Discover Opportunities:</strong> Browse through a diverse range of volunteer opportunities tailored to your interests, skills, and availability.</li>
                    <li><strong>Connect with Organizations:</strong> Connect with reputable nonprofit organizations, community groups, and NGOs seeking volunteers like you.</li>
                    <li><strong>Make a Difference:</strong> Dive into hands-on volunteer work, virtual volunteering, or skilled-based projects—whatever suits your preferences and schedule.</li>
                    <li><strong>Track Your Impact:</strong> Keep track of your volunteer hours, accomplishments, and impact on our platform.</li>
                </ul>
                <h3>Our Commitment</h3>
                <p>
                    At Kinect, we're committed to fostering a supportive and inclusive community where everyone feels valued and empowered. We uphold the highest standards of integrity, transparency, and accountability, ensuring a positive and rewarding experience for all our users.
                </p>
                <h3>Join Us Today!</h3>
                <p>
                    Ready to embark on your volunteering journey? Join Kinect today and become part of a vibrant community of changemakers dedicated to making the world a better place—one act of kindness at a time.
                </p>
            </div>
        </div>
    );
};

export default About;
