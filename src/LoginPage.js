import React from 'react';
import {Redirect} from "react-router";


function LoginPage(props) {
    const goToPage = () => {
        props.history.push("/home");
    };
    console.log(props);
    return (
        <div>
            {
                props.isLoggedIn ? <Redirect to="/" /> : <h1>
                    Login Page
                    Login Page
                    Login Page
                </h1>
            }
            <button onClick={() =>  goToPage()}>Giriş Yap</button>
        </div>
    );
}

export default LoginPage;
