import { Suspense, lazy, useEffect, useState } from 'react';
import { Navigate, useRoutes, useLocation, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Emploi from '../components/EmploiRes';

// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';
import DashboardLayoutStudent from '../layouts/dashboardStudent';
import DashboardLayoutProf from '../layouts/dashboardProf';
import { USER_TYPE } from '../Redux/types';
import ProtectedRoute, { getUserTypeFromToken } from './Pravite-routes';
// import ProtectedRoute from './Pravite-routes';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();


  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};






export default function Router({destination}) {



  


  return useRoutes([
    {
      path: '/',
      element: <Navigate to={destination} replace />
    },


    {
      path: '/dashboard',
      element: <ProtectedRoute type="admin" > <DashboardLayout />  </ProtectedRoute>,
      children: [
        { element: <Navigate to="/dashboard/groupe-active" replace />, index: true },
        { path: 'groupe-active', element: <AllGroupeActive /> },
        { path: 'professeurs-active', element: <ProfActive /> },
        { path: 'salle-active', element: <SalleActive /> },

        {
          path: 'Seances',
          children: [
            { element: <Navigate to="/dashboard/Seances/add-emploi" replace />, index: true },
            { path: 'add-emploi', element: <AddEmploi /> },
            { path: 'delete-emploi', element: <DeleteEmploi /> },
            { path: 'ajouter-emploi', element: <AjouterEmploi /> },
          ],
        },

        {
          path: 'encadrent',
          children: [
            { element: <Navigate to="/dashboard/encadrent/add-Encadrement" replace />, index: true },
            { path: 'add-Encadrement', element: <AjouterEncadremant /> },
            { path: 'delete-Encadrement', element: <SupprimerEncadremant /> },
          ],
        },


      ],
    },

    // // Prof
    {
      path: '/prof',
      element: <ProtectedRoute type="professeur" > < DashboardLayoutProf /> </ProtectedRoute>,

      children: [
        { element: <Navigate to="/prof/time-table" replace />, index: true },
        { path: 'home', element: <HomeProf /> },
        { path: 'time-table', element: <TimeTableProf /> },
        { path: 'groupe-encadre', element: <GpEncadre /> },


        // {
        //   path: 'Seances',
        //   children: [
        //     { element: <Navigate to="/dashboard/Seances/ajouter-seance" replace />, index: true },
        //     { path: 'ajouter-seance', element: <AjouterSeance /> },
        //     // { path: 'chercher-seance', element: <ChercherSeance /> },
        //     // { path: 'six', element: <PageSix /> },
        //   ],
        // },

      ],
    },



    // Student 
    {
      path: '/student',
      element: <ProtectedRoute type="student" >  <DashboardLayoutStudent /> </ProtectedRoute>,
      children: [
        { element: <Navigate to="/student/home" replace />, index: true },
        { path: 'home', element: <HomeStudent /> },
        { path: 'time-table', element: <TimeTable /> },
        { path: 'examination', element: <Examination /> },
        { path: 'change-password', element: <ChangePassword /> },

      ],
    },





    // not found
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },



    { path: '*', element: <Navigate to="/404" replace /> },


    // Auth 
    { path: '/login', element: <Login /> },
    // { path: '/register', element: <Register /> },






  ]);
}


// Dashboard
const AllGroupeActive = Loadable(lazy(() => import('../pages/AllGroupeActive')));
const ProfActive = Loadable(lazy(() => import('../pages/ProfActive')));
const SalleActive = Loadable(lazy(() => import('../pages/SalleActive')));
const DeleteEmploi = Loadable(lazy(() => import('../pages/DeleteEmploi')));
const AjouterEmploi = Loadable(lazy(() => import('../pages/test')));
const AddEmploi = Loadable(lazy(() => import('../pages/AddEmploi')));
const AjouterEncadremant = Loadable(lazy(() => import('../pages/AjouterEncadremant')));
const SupprimerEncadremant = Loadable(lazy(() => import('../pages/DeleteEncadrement')));


// Student 
const HomeStudent = Loadable(lazy(() => import('../pages/Student/Home')));
const TimeTable = Loadable(lazy(() => import('../pages/Student/TimeTable')));
const Examination = Loadable(lazy(() => import('../pages/Student/Examination')));
const ChangePassword = Loadable(lazy(() => import('../pages/Student/ChangePassword')));


// prof 
const HomeProf = Loadable(lazy(() => import('../pages/Prof/Home')));
const TimeTableProf = Loadable(lazy(() => import('../pages/Prof/TimeTable')));
const GpEncadre = Loadable(lazy(() => import('../pages/Prof/GpEncadre')));


// const PageSix = Loadable(lazy(() => import('../pages/PageSix')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));


// Auth
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));

