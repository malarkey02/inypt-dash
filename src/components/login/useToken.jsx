import React, {useState} from "react";

export default function useToken(){
    const getToken = ()=>{
        const tokenString = localStorage.getItem('token');
        const tokenObj = JSON.parse(tokenString);
        return tokenObj?.token; 
    }

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    }

    return {
        setToken: saveToken,
        token
    }

}