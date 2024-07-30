"use client";

import React, { useState, useEffect } from 'react';

type User = {
    id: string;
    name: string;
    username: string;
    email: string;
}

const FetchUser: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const users: User[] = await response.json();
            setUsers(users);
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>All users</h1>
            {users.map((user: User) => (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <h1>{user.email}</h1>
                </div>
            ))}
        </div>
    );
}

export default FetchUser;