import axios from 'axios';
import { createRef, useState } from 'react';
import { useHistory } from 'react-router';
import FormInput from './FormInput.jsx';

export default function UpdateForm(props) {

   const user = props.commonProps; 

   const [state, setstate] = useState({
        ...user,
        newPw : '',
        confirmNewPw : ''
    });

    const handleChange = (event) => {
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;
        setstate({...state, [name] : value})
    }

    const history = useHistory();

    const formRef = createRef();
    const submitBtn = createRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const url = "http://localhost:8080/users/" + state.id;
        axios.put(url, state)
            .then(response => history.push('/'))
            .catch(error => console.log(error));
    }

    return (
        <section>
            <div className="boxHeader">
                <p>Modification d'utilisateur</p>
                <div className="formButtons">
                    <i onClick={() => history.goBack()} className="fas fa-times"></i>
                    <i onClick={() => submitBtn.current.click()} className="fas fa-check"></i>
                </div>
            </div>
            <form ref={formRef} className="userForm" onSubmit={handleSubmit}>
                <div className="form-column">
                    <FormInput 
                        value={state.lastName} 
                        onChange={handleChange} 
                        label='Nom* :' 
                        type='text' 
                        name='lastName'
                        required={true}
                    />
                    <FormInput 
                        value={state.firstName} 
                        onChange={handleChange} 
                        label='Pr&eacute;nom* :' 
                        type='text' 
                        name='firstName'
                        required={true}
                    />

                    <div>
                        <label htmlFor="company">Soci&eacute;t&eacute; :</label>
                        <select name="companies" id="company-select">
                            <option value=""></option>
                            <option value="Intermarche">Intermarch&eacute;</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="companyTyped">Division* :</label>
                        <select name="companyTypeds" id="companyTyped-select">
                            <option value=""></option>
                            <option value="Store">Magasin</option>
                        </select>
                    </div>

                    <FormInput 
                        value={state.email} 
                        onChange={handleChange} 
                        label='Email* :' 
                        type='text' 
                        name='email'
                        required={true}
                    />

                    <div>
                        <label htmlFor="role">R&ocirc;le* :</label>
                        <select name="roles" id="role-select">
                            <option value=""></option>
                            <option value="CEO">Directeur</option>
                            <option value="Manager">Manager</option>
                        </select>
                    </div>
                </div>

                <div className="form-column">
                    <FormInput 
                        value={state.username} 
                        onChange={handleChange} 
                        label='Identifiant* :' 
                        type='text' 
                        name='username'
                        required={true}
                    />
                    <FormInput 
                        value={state.password} 
                        onChange={handleChange} 
                        label='Mot de passe :' 
                        type='password' 
                        name='password'
                        required={true}
                    />
                    <FormInput 
                        value={state.newPw} 
                        onChange={handleChange} 
                        label='Nouveau mdp :' 
                        type='password' 
                        name='newPw'
                    />
                    <FormInput 
                        value={state.confirmNewPw} 
                        onChange={handleChange} 
                        label='Confirmation :' 
                        type='password' 
                        name='confirmNewPw'
                    />
                </div>

                <div className="form-column">
                    <div>
                        <label>Tags :</label>Région PACA
                    </div>
                </div>

                <button ref={submitBtn} style={{display: "none"}}>Update</button>
            </form> 

        </section>
    );
};