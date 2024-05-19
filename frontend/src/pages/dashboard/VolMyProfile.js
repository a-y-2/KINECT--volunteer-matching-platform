import React, { useState, useEffect } from 'react';
import './VolMyProfile.css'; // Import custom styles
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utilities/AuthContext';
import BackendService from '../../services/BackendService';

const backendService = new BackendService();

const VolMyProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [daysAvailable, setDaysAvailable] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const { isAuthenticated, userId, profileId } = useAuth();

  useEffect(() => {
    console.log('IsAuthenticated:', isAuthenticated);
    console.log('UserId:', userId);
    console.log('ProfileId:', profileId);
  }, []);

  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [newSkill, setNewSkill] = useState('');
  const [newCertificate, setNewCertificate] = useState('');

  useEffect(() => {
    fetchUserProfile();
  }, [profileId]);

  // const address = null;

  const fetchUserProfile = async () => {
    try {
      if (profileId) {
        const profileDetail = await backendService.fetchProfileDetailIdById(profileId);
        setProfileData(profileDetail);
        setPhone(profileDetail.phone || '');
        setCity(profileDetail.city || '');
        setState(profileDetail.state || '');
        setZipcode(profileDetail.zipcode || '');
        setDaysAvailable(profileDetail.daysOfWeekAvailable.join(', ') || '');
        setAddress((profileData?.city || '-') + ", " + (profileData?.state || '-'));
        console.log(address);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProfile = () => {
    setIsEditMode(true);
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSaveChanges = async () => {
    const updatedProfileData = {
      photo: 'examplePhotoUrl', // Replace with actual photo URL if available
      phone,
      city,
      state,
      zipcode,
      daysOfWeekAvailable: daysAvailable.split(',').map(day => day.trim()),
      skills: profileData?.skills || [],
      past: 'Example past experience', // Replace with actual past experience if available
      motivation: 'Example motivation', // Replace with actual motivation if available
      certificates: profileData?.certificates || []
    };

    try {
      await backendService.updateProfileDetailIdById(profileId, updatedProfileData);
      setIsEditMode(false);
      fetchUserProfile(); 
    } catch (error) {
      console.error('Error saving profile changes:', error);
    }
  };

  const handleAddSkill = () => {
    setProfileData(prevProfileData => ({
      ...prevProfileData,
      skills: [...(prevProfileData.skills || []), newSkill]
    }));
    setNewSkill('');
  };

  const handleAddCertificate = () => {
    setProfileData(prevProfileData => ({
      ...prevProfileData,
      certificates: [...(prevProfileData.certificates || []), newCertificate]
    }));
    setNewCertificate('');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderAddItemField = (placeholder, value, onChange, addItemFunction) => (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <Button variant="primary" onClick={addItemFunction}>Add</Button>
    </div>
  );

  const fullName = (profileData?.user?.firstName || '-') + ' ' + (profileData?.user?.lastName || '-');
  // const address = (profileData?.user?.city || '-') + ", " + (profileData?.user?.state || '-');

  return (
    <div className="container">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Volunteer" className="rounded-circle" width="150" />
                  <div className="mt-3">
                    <h4>{fullName}</h4>
                    {/* <p className="text-secondary mb-1">{fullName}</p> */}
                    <p className="text-muted font-size-sm">{address}</p>
                    <div className='btn-group'>
                      <button className="btn btn-primary">Follow</button>
                      <button className="btn btn-outline-primary">Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body details">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {isEditMode ? (
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    ) : (
                      profileData?.phone || '-'
                    )}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">City</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {isEditMode ? (
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    ) : (
                      profileData?.city || '-'
                    )}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">State</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {isEditMode ? (
                      <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      />
                    ) : (
                      profileData?.state || '-'
                    )}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Zipcode</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {isEditMode ? (
                      <input
                        type="text"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                      />
                    ) : (
                      profileData?.zipcode || '-'
                    )}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Days Available</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {isEditMode ? (
                      <input
                        type="text"
                        value={daysAvailable}
                        onChange={(e) => setDaysAvailable(e.target.value)}
                      />
                    ) : (
                      profileData?.daysOfWeekAvailable?.join(', ') || '-'
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row gutters-sm">
              <div className="col-sm-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Skills</h5>
                    {profileData?.skills?.map((skill, index) => (
                      <div key={index}>{skill}</div>
                    ))}
                    {isEditMode && renderAddItemField("Add Skill", newSkill, setNewSkill, handleAddSkill)}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Certificates</h5>
                    {profileData?.certificates?.map((certificate, index) => (
                      <div key={index}>
                        <a href={certificate} target="_blank" rel="noopener noreferrer">{`Certificate ${index + 1}`}</a>
                      </div>
                    ))}
                    {isEditMode && renderAddItemField("Add Certificate link", newCertificate, setNewCertificate, handleAddCertificate)}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                {isEditMode ? (
                  <Button variant="primary" onClick={handleSaveChanges}>
                    Save Changes
                  </Button>
                ) : (
                  <Button variant="primary" onClick={handleEdit}>
                    Edit
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolMyProfile;
