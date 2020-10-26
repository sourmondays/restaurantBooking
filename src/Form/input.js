import React from 'react'

const Input = ({ label, error, ...rest }) => {
    return (
        <>
            <div >
                <label>{label}</label>
                <input {...rest} />
                {error && (
                    <div>
                        <span > {error}</span>
                    </div>
                )}
            </div>
        </>
    )
}
export default Input
