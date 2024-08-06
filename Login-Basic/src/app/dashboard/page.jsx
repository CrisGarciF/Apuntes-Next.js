"use client"

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {

    const [user, setUser] = useState({
        email: '',
        username: '',
    });

    const router = useRouter()

    const getProfile = async () => {
        const response = await axios.get('/api/profile');
        setUser(response.data)
    }

    const logout  = async() => {
        try {
            await axios.post('/api/auth/logout')
            router.push('/login')
        } catch (error) {
            console.error(error);
        }
        
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
            <button onClick={() => getProfile()}> get profile </button>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
};

export default Dashboard;