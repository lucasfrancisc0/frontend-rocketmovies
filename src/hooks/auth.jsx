import { createContext, useContext } from 'react';
import { useState } from 'react';


const authContext = createContext({});

function authProvider({ children }) {
  const [ data, setData ] = useState({});


  return(

    <authContext.Provider provider={data}>
      { children }
    </authContext.Provider>
  );
};


function useAuth() {
  const context = useContext(authContext);

  return context;
};


export {
  authProvider,
  useAuth
};