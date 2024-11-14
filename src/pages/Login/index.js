import clsx from 'clsx';

import styles from './Login.module.scss';
import { useState } from 'react';

function LoginPage() {
    const [user, setUser] = useState({});

    const handleUserName = (e) => {
        setUser({...user, name: e.target.value})
    };
    const handlePW = (e) => {
        setUser({...user, password: e.target.value})
    };

    const handleLogin = () =>{
        alert(`${user.name} and ${user.password}`)
    }
    return ( 
        <div className={clsx(styles.wrapper)}>
            <h3>User name</h3>
            <input onChange={handleUserName}></input>
            <h3>Password</h3>
            <input onChange={handlePW}></input>
            <br></br>
            <button onClick={handleLogin}>Login</button>
        </div>
     );
}

export default LoginPage;