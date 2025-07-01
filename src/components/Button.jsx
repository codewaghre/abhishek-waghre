import React from 'react'

function Button({ text, onClick, link }) {
    return (
        <>


            <div className='connect-btn'>
                <button onClick={onClick} >
                    <a href={link}>
                        {text}
                    </a>
                </button>
            </div>
        </>
    )
}

export default Button