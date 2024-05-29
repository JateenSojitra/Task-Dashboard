import React from 'react'

const TextArea = (props) => {
    return (
        <textarea
            type={props.type}
            required={props.required}
            id={props.id}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            className={props.className}
            placeholder={props.placeholder}
            row={props.row || 3}
            autoComplete='off'
            disabled={props.disabled}
            minLength={props.minLength}
            maxLength={props.maxLength}
            onBlur={props.onBlur}
        />
    )
}

export default TextArea
