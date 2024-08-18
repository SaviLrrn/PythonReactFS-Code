import React, { useState, useEffect } from 'react';

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.log('Error fetching user', error);
            }
        };
        fetchUsers();
    }, []);


    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default Users;