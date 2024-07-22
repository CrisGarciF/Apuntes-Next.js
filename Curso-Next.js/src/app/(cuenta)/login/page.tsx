"use client";

import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/")
    }

    return (
        <>
            <h1>Inicir sesion</h1>
            <button onClick={handleClick}>Regresar home</button>
        </>
    )
}