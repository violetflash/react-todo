import React from 'react';
import TodoListItem from "../TodoListItem/";
import Controls from '../Controls/';
import s from './TodoList.module.scss';
import { addConditionedStyle } from "../../functions/functions";


function TodoList(props) {

    let {data, setChange, deleteItem} = props;

    const elements = data.map(item => {
        const { id, important } = item;

        const liClasses = addConditionedStyle(important, [s.TodoList__li], s.important);

        return (
            <li key={id} className={liClasses.join(' ')}>
                <TodoListItem {...item} setChange={setChange}/>
                <Controls
                    id={id}
                    important={item.important}
                    setChange={setChange}
                    deleteItem={deleteItem}/>
            </li>
        );
    });

    return (
        <ul className={s.TodoList}>
            {elements}
        </ul>
    );
}

export default TodoList;
