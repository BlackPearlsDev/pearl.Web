import React from 'react';

function Project(props) {
    return (
        <section className='card-project'>
            <img src={props.img} alt={props.alt} />
            <article className='card-project-about'>
                <h2 className={props.theme === 'light' ? 'txt-light' : ''}>{props.title}</h2>
                <p className={props.theme === 'light' ? 'txt-light' : ''}>{props.para}</p>
                <a href='https://github.com/BlackPearlsDev' target={'_blank'} rel='noreferrer'>Voir notre travail</a>
            </article>
        </section>
    )
}

export default Project;