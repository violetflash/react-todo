import React from 'react';
import s from "./Repo.module.scss";
import github from './icons/github.svg';

const Repo = () => {
    return (
        <div className={s.Repo}>
            <a
                className={s.Repo__link}
                href="https://github.com/violetflash/react-todo"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className={s.Repo__img} src={github} alt="github"/>
                Repo
            </a>
        </div>
    )

};

export default Repo;