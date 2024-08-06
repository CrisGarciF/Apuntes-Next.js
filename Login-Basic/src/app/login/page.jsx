"use client"

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const router = useRouter()

    const handleChanges = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value,
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('/api/auth/login', credentials)

        if(response.status === 200){
            router.push('/dashboard')
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="email" type="email" placeholder="email" onChange={handleChanges} />
                <input type="password" name="password" id="" placeholder="password" onChange={handleChanges} />
                <button>Login</button>
            </form>
        </div>
    )
};

export default Login;
