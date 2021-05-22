import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../services/userList';

export default function UserList (props) {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log("je suis dans useEffect")
        const localStorage = window.localStorage;
        const localUser = localStorage.getItem('users');
        if(localUser) {
            const userLocal = JSON.parse(localUser);
            setUsers(userLocal);
        } 

        getAllUsers()
        .then(datas => {
            const tab = datas || [];
            setUsers(tab);
            localStorage.setItem('users', JSON.stringify(tab));
        })
    }, [])

    // récupération du user par comparaison des ids 
    const id = users.id;
    const userList = JSON.parse(window.localStorage.getItem('users')) || [];
    const user = userList.find((user) => user.id === id);

    const rows = userList.map((user) =>
        <tr>
            <td className="company">WeDeal</td>
            <td className="companyTyped">Fabricant</td>
            <td className="name">{user.firstname} {user.lastname}</td>
            <td className="username">{user.username}</td>
            <td className="email">{user.email}</td>
            <td className="role">Directeur</td>
            <td className="tags">R&eacute;gion PACA</td>
            <td className="actions">
                <i className="far fa-edit"/>
                <i className="fas fa-times"/>
            </td>
        </tr>
    );

    return (
        <table className='userList'>
            <thead>
                <th>SOCI&Eacute;T&Eacute;</th>
                <th>DIVISION</th>
                <th>NOM</th>
                <th>IDENTIFIANT</th>
                <th>EMAIL</th>
                <th>R&Ocirc;LE</th>
                <th>TAGS</th>
                <th>ACTIONS</th>
            </thead>
            <tbody>   
                {rows}             
            </tbody>
        </table>
    )
}