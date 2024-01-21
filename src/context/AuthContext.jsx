import React, {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";


export const AuthContext = createContext({});


function AuthContextProvider({ children }){
    // const [isAuth, isAuthenticated] = useState(false);
    const[myAuth, setMyAuth] = useState({isAuth: false, user: ""})
    const navigate = useNavigate();

    function login(myUser){
        // isAuthenticated(!isAuth);
        setMyAuth({
            user: myUser,
            isAuth: !myAuth.isAuth,
        })
        console.log('Gebruiker is ingelogd');
        navigate('/profile');
    }

    function logout(){
        // isAuthenticated(!isAuth);
        setMyAuth({
            ...myAuth,
            isAuth: !myAuth.isAuth,
        })
        console.log('Gebruiker is uitgelogd');
        navigate('/')
    }

    const data={
        // isAuth: isAuth,
        myAuth: myAuth,
        loginFunction: login,
        logoutFunction: logout,
    }
    return(
        <AuthContext.Provider value={data}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

