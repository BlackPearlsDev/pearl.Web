import React from 'react'

function Card(props) {
    return (
        <article className='card'>
            <div className='card-header'>
                <img src={props.img} alt={props.alt} />
                <h2>{props.title}</h2>
            </div>
            <p>{props.para1}</p>
            <p>{props.para2}</p>
            <p>{props.para3}</p>
        </article>
    )
}

export default Card;