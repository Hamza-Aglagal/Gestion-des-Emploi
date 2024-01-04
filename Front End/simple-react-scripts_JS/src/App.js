import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router';

import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import Settings from './components/settings';
import RtlLayout from './components/RtlLayout';
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/ProgressBar';
import ThemeColorPresets from './components/ThemeColorPresets';
import MotionLazyContainer from './components/animate/MotionLazyContainer';
import { getUserTypeFromToken } from './routes/Pravite-routes';

// ----------------------------------------------------------------------


export default function App() {


  
  const [destination, setdestination] = useState("")
  // const [UserType, setUserType] = useState(null)

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const usertype = getUserTypeFromToken(storedToken)
    // setUserType(usertype)
    if (usertype === "admin") {
      setdestination("/dashboard");
    } else if (usertype === "professeur") {
      setdestination("/prof");
    } else if (usertype === "student") {
      setdestination("/student");
    } else {
      setdestination("/login");
    }
    
  }, [])  



  return (
    <ThemeProvider>
      <ThemeColorPresets>
        <RtlLayout>
          <MotionLazyContainer>

            <ProgressBarStyle />

            <Settings />

            <ScrollToTop />

            <Router destination={destination}  />
   

            <Toaster />

          </MotionLazyContainer>
        </RtlLayout>
      </ThemeColorPresets>
    </ThemeProvider>
  );
}
