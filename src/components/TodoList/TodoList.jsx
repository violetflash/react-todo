import React from 'react';
import TodoListItem from "../TodoListItem/";
import Controls from '../Controls/';
import s from './TodoList.module.scss';


function TodoList(props) {

    let {data, setChange, deleteItem} = props;

    const elements = data.map(item => {
        const { id } = item;

        return (
            <li key={id} className={s.TodoList__li}>
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
