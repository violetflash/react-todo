import React, { Component } from 'react';
import s from './TodoListItem.module.scss'
import { addConditionedStyle, capitalizer } from "../../functions/functions";

export default class TodoListItem extends Component {

    // itemHandler = () => {
    //     console.log(this.props.label);
    // }

    render() {
        let { id, setChange, label, isDone, important = false } = this.props;

        let itemClass = addConditionedStyle(important, [s.Item], s.important);
        itemClass = addConditionedStyle(isDone, [...itemClass], s.done);

        return (
            <span
                className={itemClass.join(' ')}
                onClick={() => setChange(id, 'isDone')}
            >
                {capitalizer(label)}
            </span>
        )
    }
}

// TodoListItem.defaultProps = {important: false}
