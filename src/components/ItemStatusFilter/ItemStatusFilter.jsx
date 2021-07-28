import React, { Component } from 'react';
import s from './ItemStatusFilter.module.scss';

export default class ItemStatusFilter extends Component {

    render() {
        return (
            <div className={s.Filter}>
                <button className={s.Filter__btn} type="button">All</button>
                <button className={s.Filter__btn} type="button">Active</button>
                <button className={s.Filter__btn} type="button">Done</button>
            </div>
        )
    }
}
