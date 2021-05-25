import React from 'react'

export default function formInput({ label, name, type, value, onChange, required = false }) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input 
                value={value}
                onChange={onChange}
                type={type} 
                id={name}
                name={name}
                required={required}
            />
        </div>
    )
}