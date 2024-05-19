import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form, InputGroup, Badge } from 'react-bootstrap';
import './CustomModal.css'; // Import the CSS file for styling
import BackendService from '../../services/BackendService';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useAuth } from '../../utilities/AuthContext';


const backendService = new BackendService();

const CustomModal = ({ type, show, onClose }) => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState(null);
    const [name, setName] = useState('');

    const [description, setDescription] = useState('');
    const [website, setWebsite] = useState('');
    const [location, setLocation] = useState('');
    const [mission, setMission] = useState('');
    const [contact, setContact] = useState('');

    const [locations, setLocations] = useState([]);
    const [causes, setCauses] = useState([]);
    const [newLocation, setNewLocation] = useState('');
    const [newCause, setNewCause] = useState('');


    const [npoData, setNpoData] = useState({
      name: '',
      email: '',
      password: '',
      description: '',
      website: '',
      locations: [],
      mission: '',
      causes: [],
      contactEmail: ''
  });


  const handleNpoDataChange = (e) => {
    const { name, value } = e.target;
    console.log("checking e"+e);
    setNpoData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};


  const handleLocationInputChange = (e) => {
      setNewLocation(e.target.value);
  };



  const handleLocationAdd = () => {
    if (newLocation.trim() !== '') {
   
        setLocations([...locations, newLocation]);

        setNpoData((prevData) => ({
            ...prevData,
            locations: [...prevData.locations, newLocation]
        }));

        setNewLocation('');
    }
};

  const handleCauseInputChange = (e) => {
      setNewCause(e.target.value);
  };

  const handleCauseAdd = () => {
    if (newCause.trim() !== '') {
        setCauses([...causes, newCause]);

        setNpoData((prevData) => ({
            ...prevData,
            causes: [...prevData.causes, newCause]
        }));

        setNewCause('');
    }
};


  const handleRemoveLocation = (index) => {
    setLocations(locations.filter((_, i) => i !== index));
};

const handleRemoveCause = (index) => {
    setCauses(causes.filter((_, i) => i !== index));
};


    const navigate = useNavigate();



    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'website':
                setWebsite(value);
                break;
            case 'location':
                setLocation(value);
                break;
            case 'mission':
                setMission(value);
                break;
            case 'causes':
                setCauses(value);
                break;
            case 'contact-email':
                setContact(value);
                break;
            default:
                break;
        }
    };

      const handleVolunteerRegistration = async (e) => {
        e.preventDefault();
        try {
            const userData = { email, password, dob };
            await backendService.registerVolunteer(userData);
            navigate('/volunteer-dashboard');
        } catch (error) {
            console.error('Registration failed:', error.message);
        }
    };

    const handleNpoRegistration = async (e) => {
      e.preventDefault();
      try {
          console.log(npoData);
          const response = await backendService.registerNpo(npoData);
          if (response.status === 200) {
            onClose();
            navigate('/npo-dashboard');
        }
          onClose(); 
      } catch (error) {
          console.error('Registration failed:', error.message);
      }
  };


  const handleLogin = async (type, e) => {
    e.preventDefault();
    try {
        // const response = await backendService.login(email, password);
        await login(email, password);
        console.log(type);
        // console.log();
        if (type === 'volunteer-login') {
            onClose();
            navigate('/volunteer-dashboard');
        } else {
            onClose();
            navigate('/npo-dashboard');
        }
    } catch (error) {
        console.error('Login failed:', error.message);
    }
};

    

    const handleSubmit = async (e) => {
      e.preventDefault(e);
  
      if (type === 'volunteer-registration') {
        handleVolunteerRegistration(e);
      } else if(type === 'npo-registration'){
        handleNpoRegistration(e);
      }
        else{
          handleLogin(type, e);
      }
    };


    const getFieldByType = () => {
        switch (type) {
            case 'volunteer-registration':
                return (
                    <>
                        <Form.Group className='form-element'>
                            <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className='form-element'>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className='form-element'>
                            <DatePicker
                                selected={dob}
                                onChange={date => setDob(date)}
                                placeholderText="Date of Birth"
                                dateFormat="MM/dd/yyyy"
                                showYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={50}
                                maxDate={new Date()}
                                className="form-control"
                                required
                            />
                        </Form.Group>
                    </>
                );
            case 'volunteer-login':
                return (
                    <>
                         <Form.Group className='form-element'>
                            <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className='form-element'>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>
                    </>
                );
            case 'npo-login':
                return (
                    <>
                         <Form.Group className='form-element'>
                            <Form.Control type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className='form-element'>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>
                    </>
                );
            case 'npo-registration':
                return (
                        <>
                          <Form.Group className="form-element">
                            <Form.Control
                              type="text"
                              name="name"
                              placeholder="Name"
                              value={npoData.name}
                              onChange={handleNpoDataChange}
                              required
                            />
                          </Form.Group>
                          <Form.Group className="form-element">
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={npoData.email}
                              onChange={handleNpoDataChange}
                              required
                            />
                          </Form.Group>
                          <Form.Group className="form-element">
                            <Form.Control
                              type="password"
                              name="password"
                              placeholder="Password"
                              value={npoData.password}
                              onChange={handleNpoDataChange}
                              required
                            />
                          </Form.Group>
                          <Form.Group className="form-element">
                            <Form.Control
                              type="description"
                              name="description"
                              placeholder="Description"
                              value={npoData.description}
                              onChange={handleNpoDataChange}
                              required
                            />
                          </Form.Group>
                          <Form.Group className="form-element">
                            <Form.Control
                              type="website"
                              name="website"
                              placeholder="Website"
                              value={npoData.website}
                              onChange={handleNpoDataChange}
                              required
                            />
                          </Form.Group>
                          <Form.Group controlId="locations">
                            <Form.Label>Locations</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Add a location"
                                    value={newLocation}
                                    onChange={(e) => setNewLocation(e.target.value)}
                                />
                                <Button variant="outline-secondary" onClick={handleLocationAdd}>Add</Button>
                            </InputGroup>
                            {locations.map((location, index) => (
                                <Badge key={index} pill variant="primary" className="mr-1 mb-1">
                                    {location}
                                    <span className="ml-1" onClick={() => handleRemoveLocation(index)}>x</span>
                                </Badge>
                            ))}
                          </Form.Group>
                          <Form.Group className="form-element">
                            <Form.Control
                              type="mission"
                              name="mission"
                              placeholder="Mission"
                              value={npoData.mission}
                              onChange={handleNpoDataChange}
                              required
                            />
                          </Form.Group>
                          
                          <Form.Group controlId="formCauses">
                        <Form.Label>Causes</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Add a cause"
                                value={newCause}
                                onChange={(e) => setNewCause(e.target.value)}
                            />
                            <Button variant="outline-secondary" onClick={handleCauseAdd}>Add</Button>
                        </InputGroup>
                        {causes.map((cause, index) => (
                            <Badge key={index} pill variant="primary" className="mr-1 mb-1">
                                {cause}
                                <span className="ml-1" onClick={() => handleRemoveCause(index)}>x</span>
                            </Badge>
                        ))}
                      </Form.Group>
                          <Form.Group className="form-element">
                            <Form.Control
                              type="contactEmail"
                              name="contactEmail"
                              placeholder="Enter a valid Contact Email"
                              value={npoData.contactEmail}
                              onChange={handleNpoDataChange}
                              required
                            />
                      </Form.Group>
                      </>
                  );
            default:
                return null;
        }
    };

    return (
        <div>
            <div className={type === 'volunteer-registration' ? 'custom-modal-wide' : 'custom-modal'}>
                <Modal show={show} onHide={onClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{type === 'volunteer-registration' || type === 'npo-registration' ? 'Register' : 'Login'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            {getFieldByType()}
                            <div className="btn-btn button-container text-center">
                                <Button variant="primary" type="submit" block>{type === 'volunteer-registration' || type === 'npo-registration' ? 'Register' : 'Login'}</Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};

export default CustomModal;