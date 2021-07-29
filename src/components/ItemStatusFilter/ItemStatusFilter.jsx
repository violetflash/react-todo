import React, { Component } from 'react';
import s from './ItemStatusFilter.module.scss';
import { addConditionedStyle } from "../../functions/functions";

export default class ItemStatusFilter extends Component {

    state = {
        activeBtn: ''
    }

    classes = [];

    setActiveBtn = (e) => {
        const target = e.target;
        this.setState({activeBtn: target.value});
        console.log(this.state.activeBtn);
        if (this.state.activeBtn === target.value) {
            console.log(1);
            // this.btnClass = addConditionedStyle(true, [s.Filter__btn], s.active)
        }
    }

    render() {

        return (
            <div className={s.Filter} onClick={this.setActiveBtn}>
                <button className={s.Filter__btn} type="button" value="all">All</button>
                <button className={s.Filter__btn} type="button" value="active">Active</button>
                <button className={s.Filter__btn} type="button" value="done">Done</button>
            </div>
        )
    }
}
