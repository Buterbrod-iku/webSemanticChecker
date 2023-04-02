import React from 'react';
import s from './aside.module.css';

const Aside = () => {
    return (
        <aside>
            <div className={s.pos}>
                <h4 className={s.title}>WSC - это не валидатор</h4>
                <p className={s.text}>Это сайт не проверяет ваш сайт на правильнось написания кода. Он предоставит вам список рекомендаций по оптимизации и доступности сайта. Воспользовавшись ими ваш сайт будет доступен для пользователей, которые не видят графический интерфейс.</p>
            </div>
        </aside>
    );
};

export default Aside;