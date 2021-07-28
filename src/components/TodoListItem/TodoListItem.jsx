import React, { Component } from 'react';
import s from './TodoListItem.module.scss'
import { addConditionedStyle } from "../../functions/functions";

export default class TodoListItem extends Component {

    itemHandler = () => {
        console.log(this.props.label);
    }

    render() {
        let { label, isDone, important = false } = this.props;

        let itemClass = addConditionedStyle(important, [s.Item], s.important);
        itemClass = addConditionedStyle(isDone, [itemClass], s.done);
        // console.log(itemClass.join(' '));

        return (
            <span
                className={itemClass.join(' ')}
                onClick={this.itemHandler}
            >
                {label}
            </span>
        )
    }
}

// TodoListItem.defaultProps = {important: false}