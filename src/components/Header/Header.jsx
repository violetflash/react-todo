import React from 'react';
import s from './Header.module.scss';

const Header = ({ todo, done }) => {
    return (
        <header className={s.Header}>
            <h1>React Todo App</h1>
            <h2 className={s.Header__stats}>
                <span>Active: <span className={s.Header__stateTitle}>{todo}</span></span>
                <span>Done: <span className={s.Header__stateTitle}>{done}</span></span>
            </h2>
        </header>

    )

};

export default Header;
