import React from 'react';
import TodoListItem from "../TodoListItem/";
import Controls from '../Controls/';
import s from './TodoList.module.scss';


function TodoList(props) {

    let {data} = props;

    const elements = data.map(item => {
        const {id, ...rest} = item;

        return (
            <li key={id} className={s.TodoList__li}>
                <TodoListItem {...rest} />
                <Controls important={rest.important}/>
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
