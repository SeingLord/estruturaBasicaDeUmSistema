import Dashboard from '../pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from '../pages/Login';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<SignIn />} />   
    </Routes>
  </BrowserRouter> 
     
)

export default AppRoutes;