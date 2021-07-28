import React from 'react';
import TodoList from "./components/TodoList/TodoList";
import Header from './components/Header/Header';
import SearchPanel from "./components/SearchPanel/SearchPanel";
import s from './Todo.module.scss';

const todoData = [
    {id: 1, label: 'Eat Soup', important: false},
    {id: 2, label: 'Drink Coffee', important: false},
    {id: 3, label: 'Create React App', important: true}
];

const Todo = () => {
    return (
        <article className={s.Todo}>
            <Header/>
            <SearchPanel/>
            <TodoList data={todoData}/>
        </article>
    )

};

export default Todo;
