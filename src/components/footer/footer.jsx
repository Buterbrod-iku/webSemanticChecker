import React from 'react';
import s from './footer.module.css';

const Footer = () => {
    return (
        <footer>
            <p className={s.text_footer}>Если вы нашли баг на сайт пишите на нашу почту - <a href="#">wsd_support@gmail.com.</a> Мы будем вам благодарны.</p>
        </footer>
    );
};

export default Footer;