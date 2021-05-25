import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../services/userList';
import axios from 'axios';

export default function UserList (props) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers()
            .then(datas => {
                const tab = datas || [];
                setUsers(tab);
            });
    }, []);

    const handleDelete = (user, index) => {
        axios.delete('http://localhost:8080/users/' +user.id)
            .then(response => {
                const newUsers = [...users];
                newUsers.splice(index, 1);
                setUsers(newUsers);
            });
    };

    const rows = users.map((user, index) =>
        <tr key={user.id}>
            <td className="company">WeDeal</td>
            <td className="companyTyped">Fabricant</td>
            <td className="name">{user.firstName} {user.lastName}</td>
            <td className="username">{user.username}</td>
            <td className="email">{user.email}</td>
            <td className="role">Directeur</td>
            <td className="tags">R&eacute;gion PACA</td>
            <td className="actions">
                <Link 
                    to={
                        {
                            pathname: '/users/update/' +user.id,
                            state: {user}
                        }
                    }
                ><i className="far fa-edit"/>
                </Link>
                
                <i onClick={() => handleDelete(user, index)} className="fas fa-times"/>
            </td>
        </tr>
    );

    return (
        <section className='userList-wrapper'>
            <table className='userList'>
                <thead>
                    <tr>
                        <th>SOCI&Eacute;T&Eacute;</th>
                        <th>DIVISION</th>
                        <th>NOM</th>
                        <th>IDENTIFIANT</th>
                        <th>EMAIL</th>
                        <th>R&Ocirc;LE</th>
                        <th>TAGS</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>   
                    {rows}             
                </tbody>
            </table>
        </section>
    )
}