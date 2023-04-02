import React from 'react';
import s from './for.module.css';
import img_watch from '../img/watch1.jpg';
import img_slep from '../img/unnamed.jpg';
import img_chit from '../img/chit2.png';

const For = () => {
    return (
        <div className={s.main}>
            <h4 className={s.title}>Для кого нужна семантика?</h4>
            <div className={s.poz}>
                <div className={s.prof}>
                    <img src={img_watch} alt="" className={s.img}/>
                    <h5 className={s.title_block}>Для необычных устройств</h5>
                    <p className={s.text_block}>Сейчас сайты можно открывать на различных смарт часах и других похожих устройствах. На них не будет отображаться графический интерфейс, но они умеют выделять контент, как это происходит в режиме чтения браузера.</p>
                </div>
                <div className={s.prof}>
                    <img src={img_slep} alt="" className={s.img}/>
                    <h5 className={s.title_block}>Для людей с проблемами со зрением</h5>
                    <p className={s.text_block}>Для незрячих или частично незрячих всё сложнее. Основной инструмент для просмотра сайтов не браузер, который отрисовывает страницу, а скринридер, который читает текст со страницы вслух.</p>
                </div>
                <div className={s.prof}>
                    <img src={img_chit} alt="" className={s.img}/>
                    <h5 className={s.title_block}>Для режима чтения</h5>
                    <p className={s.text_block}>Режим чтения — это режим просмотра веб-страницы, который обеспечивает отображение на экране только текста и изображений к нему без лишних элементов веб-страницы, что позволяет пользователю сосредоточиться на чтении текстового контента.</p>
                </div>
            </div>
        </div>
    );
};

export default For;