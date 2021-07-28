import React from 'react';
import s from './TodoListItem.module.scss'
import { addConditionedStyle } from "../../functions/functions";

const TodoListItem = ({ label, important = false }) => {

    const itemClass = addConditionedStyle(important, s.Item, s.important);

    return (
        <span className={itemClass}>{label}</span>
    )

};

export default TodoListItem;
