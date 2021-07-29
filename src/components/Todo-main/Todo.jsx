import React from 'react';
import TodoList from "../TodoList/";
import Header from '../Header/';
import SearchPanel from "../SearchPanel/";
import Filter from '../ItemStatusFilter/';
import s from './Todo.module.scss';
import Repo from "../Repo";
import AddNewItemForm from "../AddNewItemForm";

class Todo extends React.Component {

    state = {
        data: localStorage.getItem('react-todo-data') ?
            JSON.parse(localStorage.getItem('react-todo-data')) :
            [
                {id: 1, label: 'Eat Soup', important: false, isDone: false},
                {id: 2, label: 'Drink Coffee', important: false, isDone: false},
                {id: 3, label: 'Create React App', important: false, isDone: false}
            ]
    }

    getMaxId() {
        return Math.max(...this.state.data.map(el => el.id));
    }

    getActiveNum() {
        return this.state.data.filter((el) => !el.isDone).length;
    }

    getDoneNum() {
        return this.state.data.length - this.getActiveNum();
    }

    componentDidUpdate() {
        localStorage.setItem('react-todo-data', JSON.stringify(this.state.data));
    }

    setChange = (id, key) => {
        const newData = [...this.state.data];
        const idItemIndex = newData.findIndex((elem) => elem.id === id);
        const [idItem] = newData.filter((item) => item.id === id);
        idItem[key] = !idItem[key];
        newData[idItemIndex] = idItem;
        this.setState({data: newData});
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {data: data.filter((item) => item.id !== id)}
        })
    }

    addItem = (e) => {
        e.preventDefault();
        const newObject = {
            id: this.getMaxId() + 1,
            label: 'Some text here from input value',
            important: false,
            isDone: false
        }
        this.setState(({ data }) => {
            return {data: [...data, newObject]};
        })
    }

    render() {
        const {data} = this.state;
        const todo = this.getActiveNum();
        const done = this.getDoneNum();

        return (
            <article className={s.Todo}>
                <Repo/>
                <Header todo={todo} done={done}/>
                <div className={s.Todo__top}>
                    <SearchPanel/>
                    <Filter/>
                </div>
                <TodoList data={data} setChange={this.setChange} deleteItem={this.deleteItem}/>
                <AddNewItemForm addItem={this.addItem}/>
            </article>
        )

    }
}

export default Todo;
