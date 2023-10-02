import { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';

import { api } from '../services/api';


const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [ data, setData ] = useState({});


  async function signIn({ email, password }) {
    
    try {
      const response = await api.post("/session", { email, password });
      const { user, token } = response.data;

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);

      alert(response.data.message)

    }catch(error) {
      if(error.response){
        alert(error.response.data.message);

      }else {
        alert("Não foi possível realizar a autenticação.");
      };
    };
  };

  useEffect(() => {

    const user = localStorage.getItem("@rocketmovies:user");
    const token = localStorage.getItem("@rocketmovies:token");

    if(user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    };

    data({
      user: JSON.parse(user),
      token
    });

  }, []);
  

  return (

    <AuthContext.Provider value={
      {
        user: data.user,
        signIn
      }
    }>

      { children }
    </AuthContext.Provider>
  );
};


function useAuth() {
  const context = useContext(AuthContext);

  return context;
};


export {
  AuthProvider,
  useAuth
};