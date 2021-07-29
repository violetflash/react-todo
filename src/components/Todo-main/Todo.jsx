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
            [],
        inputValue: ''
    }

    getInputValue = (e) => {
        this.setState({inputValue: e.target.value});
    }

    getMaxId() {
        return this.state.data.length ? Math.max(...this.state.data.map(el => el.id)) : 0;
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

        if (! this.state.inputValue) return;
        const newObject = {
            id: this.getMaxId() + 1,
            label: this.state.inputValue,
            important: false,
            isDone: false
        }
        this.setState(({ data }) => {
            return {data: [...data, newObject]};
        })
        this.setState({inputValue: ''});
    }

    render() {
        const {data} = this.state;
        const todo = this.state.data.filter((el) => !el.isDone).length;
        const done = this.state.data.length - todo;

        return (
            <article className={s.Todo}>
                <Repo/>
                <Header todo={todo} done={done}/>
                <div className={s.Todo__top}>
                    <SearchPanel/>
                    <Filter/>
                </div>
                <TodoList data={data} setChange={this.setChange} deleteItem={this.deleteItem}/>
                <AddNewItemForm
                    addItem={this.addItem}
                    inputValue={this.state.inputValue}
                    getInputValue={this.getInputValue}
                />
            </article>
        )

    }
}

export default Todo;
