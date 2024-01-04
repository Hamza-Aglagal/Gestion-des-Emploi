import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'



import { jwtDecode } from 'jwt-decode';



export const getUserTypeFromToken = (token) => {
  // const token = localStorage.getItem('token');

  if (token) {
    const decoded = jwtDecode(token);

    return decoded.userType

  }

  // console.log('Token is undefined or null.');
};

export const getIdFromToken = (token) => {
  // const token = localStorage.getItem('token');

  if (token) {
    const decoded = jwtDecode(token);

    return decoded.sub

  }

  console.log('Token is undefined or null.');
};






const ProtectedRoute = ({ type, children }) => {
  // console.log('----Auth:', type);
  const storedToken = localStorage.getItem('token');
  const usertype = getUserTypeFromToken(storedToken)

  if (type === usertype) {
    return children || <Outlet />;
  }

  return <Navigate to="/login" replace />;
}



export default ProtectedRoute


// Test1@emsi-admins.ma    ||  1234567890
// soufiane@emsi-professeurs.ma    ||  1A2Z3E4R5T


