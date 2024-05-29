import React from 'react'

const TextInput = (props) => {
    return (
        <input
            type={props.type}
            id={props.id}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            className={props.className}
            placeholder={props.placeholder}
            disabled={props.disabled}
            required={props.required}
            autoComplete='off'
            minLength={props.minLength}
            maxLength={props.maxLength}
        />
    )
}

export default TextInput
