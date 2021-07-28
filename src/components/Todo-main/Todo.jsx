import React from 'react';
import TodoList from "../TodoList/";
import Header from '../Header/';
import SearchPanel from "../SearchPanel/";
import Filter from '../ItemStatusFilter/';
import s from './Todo.module.scss';
import Repo from "../Repo";

class Todo extends React.Component {

    state = {
        data: [
            {id: 1, label: 'Eat Soup', important: false, isDone: true},
            {id: 2, label: 'Drink Coffee', important: false, isDone: false},
            {id: 3, label: 'Create React App', important: true, isDone: false}
        ]
    }

    setDone = (id) => {

    }


    render() {
        const {data} = this.state;
        return (
            <article className={s.Todo}>
                <Repo/>
                <Header/>
                <div className={s.Todo__top}>
                    <SearchPanel/>
                    <Filter/>
                </div>
                <TodoList data={data}/>
            </article>
        )

    }
}

export default Todo;
