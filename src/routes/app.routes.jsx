import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { New } from '../pages/New';
import { Profile } from '../pages/Profile';
import { Details } from '../pages/Details';


export function AppRoutes() {

  return(

    <Routes>

      <Route 
        path="/" 
        element={ <Home />} 
      />

      <Route 
        path="/New" 
        element={ <New />} 
      />

      <Route 
        path="/Profile" 
        element={ <Profile />} 
      />

      <Route 
        path="/Details/:movie_id" 
        element={ <Details/>} 
      />

    </Routes>
  );
};