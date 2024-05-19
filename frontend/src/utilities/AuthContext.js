// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { jwtDecode } from "jwt-decode";
// import BackendService from '../services/BackendService';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userId, setUserId] = useState(null);
//   const [profileId, setProfileId] = useState(null);

//   const backendService = new BackendService();



//   // useEffect(() => {
//   //     login();
//   // }, []);

//   useEffect(() => {
//     console.log("from authcontext : ", userId, profileId); 
//   }, [userId, profileId]);

//   const login = async (email, password) => { 
//     try {
//       console.log('Logging in with email:', email);
//       console.log('Password:', password);
//       const response = await backendService.login(email, password);
//       console.log('Login response:', response);
//       if (response && response.token) {
//         localStorage.setItem('jwt', response.token);
//         const decodedToken = decodeJwtToken(response.token);
//         console.log('Decoded token:', decodedToken);
//         if (decodedToken && decodedToken.userId) {
//           setUserId(decodedToken.userId);
//           console.log('Fetching profile ID for user ID:', decodedToken.userId);
//           await fetchProfileId(decodedToken.userId);
//           setIsAuthenticated(true);
//         }
//       } else {
//         console.error('Login failed: Invalid response from server');
//       }
//     } catch (error) {
//       console.error('Login failed:', error.message);
//     }
//   };


//   const decodeJwtToken = (token) => {
//     try {
//       return jwtDecode(token);
//     } catch (error) {
//       console.error('Error decoding JWT token:', error);
//       throw new Error('Failed to decode JWT token');
//     }
//   };


//   const fetchProfileId = async (userId) => {
//     try {
//       console.log(userId);
//       const fetchedProfileId = await backendService.fetchUserProfileIdByUserId(userId);
//       console.log('Profile id:', fetchedProfileId);
//       if (fetchedProfileId) {
//         console.log('Setting profile ID:', fetchedProfileId);
//         setProfileId(fetchedProfileId);
//       }
//     } catch (error) {
//       console.error('Failed to fetch profile ID:', error);
//     }
//   };

//   // const logout = () => {
//   //   setIsAuthenticated(false);
//   //   // setCurrentUser(null); 
//   //   localStorage.removeItem('jwt'); 
//   // };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, userId, profileId, login }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import BackendService from '../services/BackendService';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [profileId, setProfileId] = useState(null);

  const backendService = new BackendService();

  useEffect(() => {
    const storedJwt = sessionStorage.getItem('jwt'); // Read from session storage
    if (storedJwt) {
      const decodedToken = decodeJwtToken(storedJwt);
      if (decodedToken && decodedToken.userId) {
        setUserId(decodedToken.userId);
        fetchProfileId(decodedToken.userId);
        setIsAuthenticated(true);
      }
    }
  }, []);

  useEffect(() => {
    if (userId && profileId) {
      sessionStorage.setItem('userId', userId); 
      sessionStorage.setItem('profileId', profileId);
    }
  }, [userId, profileId]);

  const login = async (email, password) => { 
    try {
      const response = await backendService.login(email, password);
      if (response && response.token) {
        sessionStorage.setItem('jwt', response.token); 
        const decodedToken = decodeJwtToken(response.token);
        if (decodedToken && decodedToken.userId) {
          setUserId(decodedToken.userId);
          fetchProfileId(decodedToken.userId);
          setIsAuthenticated(true);
        }
      } else {
        console.error('Login failed: Invalid response from server');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  const decodeJwtToken = (token) => {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Error decoding JWT token:', error);
      throw new Error('Failed to decode JWT token');
    }
  };

  const fetchProfileId = async (userId) => {
    try {
      const fetchedProfileId = await backendService.fetchUserProfileIdByUserId(userId);
      if (fetchedProfileId) {
        setProfileId(fetchedProfileId);
      }
    } catch (error) {
      console.error('Failed to fetch profile ID:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userId, profileId, login }}>
      {children}
    </AuthContext.Provider>
  );
};

