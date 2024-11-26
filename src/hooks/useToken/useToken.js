import { useState } from "react";

export default function useToken(){
    const getToken = () => {
        const dataString = sessionStorage.getItem('token');
        const data = JSON.parse(dataString);
        return data?.token;
    };
    
    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        sessionStorage.setItem('userToken', JSON.stringify(userToken));
        setToken(userToken.token);
    }

    return {
        token,
        setToken: saveToken
    }

}