"use client"

import { useParams } from "next/navigation";

const UserPage = () => {
    const params = useParams()
    console.log(params);

    return (
        <div>
            <button onClick={() => {
                console.log('Works!!');
            }}>Click</button>
        </div>
    )
};

export default UserPage;
