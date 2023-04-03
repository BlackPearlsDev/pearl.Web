import React from 'react'

function Card(props) {

    console.log('props:', props);

    return (
        <article className={props.theme === 'light' ? 'card bcg-light' : 'card'}>
            <div className='card-header'>
                <div className={props.theme === 'light' ? 'card-header-icons bcg2-light' : 'card-header-icons'}>
                    <svg viewBox="0 0 1024 1024" display="inline-block" stroke="currentcolor" fill="currentcolor" width="32px" height="32px">
                        <path d={props.path}/>
                    </svg>
                </div>
                <h2 className={props.theme === 'light' ? 'txt-light' : ''}>{props.title}</h2>
            </div>
            <p className={props.theme === 'light' ? 'txt-light' : ''}>{props.para1}</p>
        </article>
    )
}

export default Card;