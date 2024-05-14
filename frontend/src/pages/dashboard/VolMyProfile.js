import React, { useState } from 'react';
import './VolMyProfile.css'; // Import custom styles

const VolMyProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [phone, setPhone] = useState('(239) 816-9029');
  const [city, setCity] = useState('San Francisco');
  const [state, setState] = useState('California');
  const [zipcode, setZipcode] = useState('94103');
  const [daysAvailable, setDaysAvailable] = useState('Monday, Wednesday, Friday');

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSaveChanges = () => {
    setIsEditMode(false);
    // Perform save operation here, if necessary
  };

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
                    <h4>John Doe</h4>
                    <p className="text-secondary mb-1">Volunteer</p>
                    <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                    <div className='btn-group'>
                      <button className="btn btn-primary">Follow</button>
                      <button className="btn btn-outline-primary">Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
                {/* SOCIAL LINKS */}
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><i className="feather feather-globe mr-2 icon-inline"></i>Website</h6>
                    <span className="text-secondary">https://bootdey.com</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><i className="feather feather-github mr-2 icon-inline"></i>Github</h6>
                    <span className="text-secondary">bootdey</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><i className="feather feather-twitter mr-2 icon-inline text-info"></i>Twitter</h6>
                    <span className="text-secondary">@bootdey</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><i className="feather feather-instagram mr-2 icon-inline text-danger"></i>Instagram</h6>
                    <span className="text-secondary">bootdey</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><i className="feather feather-facebook mr-2 icon-inline text-primary"></i>Facebook</h6>
                    <span className="text-secondary">bootdey</span>
                    </li>
                </ul>
                </div>
            </div>
            <div className="col-md-8">
            <div className="card mb-3">
              {/* PERSONAL-DETAILS */}
              <div className="card-body details">
                {/* Existing content */}
                <hr />
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
                      phone
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
                      city
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
                      state
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
                      zipcode
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
                      daysAvailable
                    )}
                  </div>
                </div>
                <hr />
                {/* Edit button */}
                {isEditMode ? (
                  <button className="btn btn-primary" onClick={handleSaveChanges}>
                    Save Changes
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={handleEdit}>
                    Edit
                  </button>
                )}
              </div>
            </div>
                <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                    <div className="card h-100">
                    {/* skills */}
                    <div className="card-body skills">
                        <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2"></i>Skills</h6>
                        <hr />
                        <div className='skill-list'>
                            <div className="mb-3">
                                <small>Web Design</small>
                            </div>
                            <div className="mb-3">
                                <small>Website Markup</small>
                            </div>
                            <div className="mb-3">
                                <small>One Page</small>
                            </div>
                            <div className="mb-3">
                                <small>Mobile Template</small>
                            </div>
                            <div className="mb-3">
                                <small>Backend API</small>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
                <div className="col-sm-6 mb-3">
                    <div className="card h-100">
                    <div className="card-body">
                        <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2"></i>Certificates</h6>
                        <hr />
                        <div className='cert-list'>
                            <div className="mb-3">
                                <small>Certificate 1: <a href="https://www.example.com/certificate1">Certificate 1 URL</a></small>
                            </div>
                            <div className="mb-3">
                                <small>Certificate 2: <a href="https://www.example.com/certificate2">Certificate 2 URL</a></small>
                            </div>
                            <div className="mb-3">
                                <small>Certificate 3: <a href="https://www.example.com/certificate3">Certificate 3 URL</a></small>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
                </div>
            </div>
        
            </div>
        </div>
    </div>
  )
};

export default VolMyProfile;
