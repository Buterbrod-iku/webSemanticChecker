import React from 'react';
import s from './block.module.css';

const Nav = () => {
    return(
        <nav>
            <h1 className={s.logo}><span className={s.m_logo}>W</span>eb<span className={s.m_logo}>S</span>emantic<span className={s.m_logo}>C</span>hecker</h1>
        </nav>
    );
}

const BlockInput = () => {
    return (
        <header>
            <Nav />
            <div className={s.pos_text}>
                <p className={s.alt}>Загрузите вашу HTML страницу <br/>(тип файла - .html или .php)</p>
            </div>
            <div className={s.main_input}>
                <input type="file" id="file" className={s.hidden} title=""/>
                <label htmlFor="file" id="red" className={s.input}>
                    <div id="hi" className={s.border}>Загрузите файл</div>
                </label>
                <button id="buttonT" className={s.but} disabled>&#9658;</button>
            </div>
        </header>
    );
};

export default BlockInput;