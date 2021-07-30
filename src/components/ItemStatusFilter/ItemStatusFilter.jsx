import React, { Component } from 'react';
import s from './ItemStatusFilter.module.scss';
import { addConditionedStyle, capitalizer } from "../../functions/functions";

export default class ItemStatusFilter extends Component {

    btnClass = [s.Filter__btn];

    buttonHandler = (e) => {
        const target = e.target;
        this.props.getFilterValue(target.value);
    }

    getClassName = () => {
        return addConditionedStyle(true, this.btnClass, s.active).join(' ');
    }

    render() {

        const values = ['all', 'active', 'done']
        const buttons = values.map((elem, index) => (
            <button
                className={this.props.currentFilter === elem ? this.getClassName() : s.Filter__btn}
                key={index}
                type={"button"}
                value={elem}>
                {capitalizer(elem)}
            </button>
        ))
        return (
            <div className={s.Filter} onClick={this.buttonHandler}>
                {buttons}
            </div>
        )
    }
}
