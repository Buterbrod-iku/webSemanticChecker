import React from 'react';
import s from './motive.module.css';

const Motive = () => {
    return (
        <article>
            <div className={s.bg}></div>
            <div className={s.ton}></div>
            <div className={s.center}>
                <p className={s.cov}>''</p>
                <i className={s.cit}>Создавайте сайты доступные для всех</i>
                <cite className={s.avtor}>Вадим Макеев</cite>
            </div>
        </article>
    );
};

export default Motive;