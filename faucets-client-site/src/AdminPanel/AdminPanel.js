import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';



const AdminPanel = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://faucets-server-site.vercel.app/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    

    return (
        <div>
            <div className="notice-board d-flex justify-content-center align-items-center">
                <p className="m-0 fs-3 text-white fw-semibold">Welcome To Admin Panel</p>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user, id)=><tr key={id}>
                        <td>{id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default AdminPanel;