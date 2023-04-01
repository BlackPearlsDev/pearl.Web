import React from 'react'

function Card(props) {
    return (
        <article className='card'>
            <div className='card-header'>
                <div className='card-header-icons'>
                    <svg viewBox="0 0 1024 1024" display="inline-block" stroke="currentcolor" fill="currentcolor" width="32px" height="32px">
                        <path d={props.path}/>
                    </svg>
                </div>
                <h2>{props.title}</h2>
            </div>
            <p>{props.para1}</p>
        </article>
    )
}

export default Card;