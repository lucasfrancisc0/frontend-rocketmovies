import { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';

import { api } from '../services/api';


const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [ data, setData ] = useState({});


  async function signIn(email, password) {
    
    try {
      const response = await api.post("/session", { email, password });
      const { user, token } = response.data;

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);

      alert(response.data.message);

    }catch(error) {
      if(error.response){
        alert(error.response.data.message);

      }else {
        alert("Não foi possível realizar a autenticação.");
      };
    };
  };


  async function updateProfile(user, avatarFile) {

    try {

      if(avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      };

      const { name, email, password, old_password } = user;

      const res = await api.put("/users", { name, email, password, old_password });

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));

      setData({
        user,
        token: data.token  
      });

      alert(res.data.message);

    }catch(error) {

      console.log(error)

      if(error.response) {
        alert(error.response.data.message);

      }else {
        alert("não foi possível atualizar o usuário.");
      };
    };
  };


  useEffect(() => { //Logic to login local-storage

    const user = localStorage.getItem("@rocketmovies:user");
    const token = localStorage.getItem("@rocketmovies:token");

    if(user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    };

    setData({
      user: JSON.parse(user),
      token
    });

  }, []);


  return (

    <AuthContext.Provider value={
      {
        user: data.user,
        signIn,
        updateProfile
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