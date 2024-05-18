import React from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Volunteer from './pages/landing/Volunteer/Volunteer';
import VolDashboard from './pages/dashboard/VolDashboard';
import VolMyProfile from './pages/dashboard/VolMyProfile';

import LandingNavbar from './components/navbar/LandingNavbar'; // Import LandingNavbar
import VolNavbar from './pages/dashboard/VolNavbar'; // Import DashboardNavbar
import Footer from './components/footer/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import NpoNavbar from './pages/dashboard/NpoNavbar';
import NpoDashboard from './pages/dashboard/NpoDashboard';
// import { useAuth } from './utilities/AuthContext';
import { AuthProvider, useAuth } from './utilities/AuthContext';
import EnrollmentSuccess from './pages/EnrollmentSucces';
// import PublicOnlyRoute from './utilities/PublicOnlyRoute';
import PrivateRoute from './utilities/PrivateRoute'

const Organization = () => <h2>Organization Page</h2>;



const App = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <AuthProvider>
      <div className="App">
        <Routes>
          <Route exact path='/' 
            element={
              <>
                <LandingNavbar />
                <Volunteer />
                <Footer />
              </>
            }/>
          {/* </Route> */}
          
            {/* <PublicOnlyRoute
              path="/"
              element={
                <>
                  <LandingNavbar />
                  <Volunteer />
                  <Footer />
                </>
              }
            /> */}
           {/* RIGHT NOW, ORG AND DASHBOARD HAVE SAME CONTENT, MAYBE LATER DASHBOARD CAN HAVE REC AND OPPORTUNITIES CAN HAVE EXPLORATION */}
          <Route
            path="/dashboard-opportunities"
            element={
              <>
                <VolNavbar />
                <VolDashboard />
                {/* You can choose to include or exclude Footer component for dashboard */}
              </>
            }
          />  
          <Route exact path='/volunteer-dashboard' element={<PrivateRoute/>}>
                <Route exact path='/volunteer-dashboard'
                 element={
                  <>
                    <VolNavbar />
                    <VolDashboard />
                    {/* You can choose to include or exclude Footer component for dashboard */}
                  </>
                }/>
          </Route>   
          <Route
            path="/enrollment-success"
            element={
              <>
                <VolNavbar />
                <EnrollmentSuccess/>
                {/* You can choose to include or exclude Footer component for dashboard */}
              </>
            }
          />   
           <Route
            path="/volunteer-profile"
            element={
              <>
                <VolNavbar />
                <VolMyProfile />
                {/* You can choose to include or exclude Footer component for dashboard */}
              </>
            }
          />      
          <Route
            path="/npo-dashboard" 
            element={
            <>
              <NpoNavbar />
              <NpoDashboard />
              {/* You can choose to include or exclude Footer component for dashboard */}
            </>
          } />
          <Route path="/about" 
          element={
            <>
              <LandingNavbar />
              <About/>
              <Footer />
            </>
          } />
          <Route path="/contact" 
           element={
            <>
              <LandingNavbar />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
      </AuthProvider>
    </Router>
  );
};

// const PrivateRoute = ({ element }) => {
//   const { isAuthenticated } = useAuth();

//   return isAuthenticated ? element : <Navigate to="/" />;
// };

export default App;

// import React from 'react';
// import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Volunteer from './pages/landing/Volunteer/Volunteer';
// import VolDashboard from './pages/dashboard/VolDashboard';
// import VolMyProfile from './pages/dashboard/VolMyProfile';
// import LandingNavbar from './components/navbar/LandingNavbar'; // Import LandingNavbar
// import VolNavbar from './pages/dashboard/VolNavbar'; // Import DashboardNavbar
// import Footer from './components/footer/Footer';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import NpoNavbar from './pages/dashboard/NpoNavbar';
// import NpoDashboard from './pages/dashboard/NpoDashboard';
// import EnrollmentSuccess from './pages/EnrollmentSucces';
// import { AuthProvider, useAuth } from './utilities/AuthContext';

// const Organization = () => <h2>Organization Page</h2>;

// const App = () => {
//   return (
//     <Router>
//       <AuthProvider>
//         <div className="App">
//           <Routes>
//               <Route
//                 path="/"
//                 element={
//                   <>
//                     <LandingNavbar />
//                     <Volunteer />
//                     <Footer />
//                   </>
//                 }
//               />
//       <PrivateRoute path="/volunteer-dashboard" component={<VolDashboard />} /> {/* Update component prop */}
//       <PrivateRoute path="/dashboard-opportunities" component={<VolDashboard />} /> {/* Update component prop */}
//       <PrivateRoute path="/enrollment-success" component={<EnrollmentSuccess />} /> {/* Update component prop */}
//       <PrivateRoute path="/volunteer-profile" component={<VolMyProfile />} /> {/* Update component prop */}
//       <PrivateRoute path="/npo-dashboard" component={<NpoDashboard />} /> {/* Update component prop */}
//             <Route path="/about" element={<><LandingNavbar /><About /><Footer /></>} />
//             <Route path="/contact" element={<><LandingNavbar /><Contact /><Footer /></>} />
//           </Routes>
//         </div>
//       </AuthProvider>
//     </Router>
//   );
// };

// const PrivateRoute = ({ path, component }) => {
//   const { isAuthenticated } = useAuth();

//   return isAuthenticated ? <Route path={path} element={component} /> : <Navigate to="/" />;
// };


// export default App;
