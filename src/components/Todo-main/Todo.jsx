import React from 'react';
import TodoList from "../TodoList/";
import Header from '../Header/';
import SearchPanel from "../SearchPanel/";
import Filter from '../ItemStatusFilter/';
import s from './Todo.module.scss';
import Repo from "../Repo";
import AddNewItemForm from "../AddNewItemForm";
import { checkLS } from "../../functions/functions";

class Todo extends React.Component {

    LS_KEY = "react-todo-data";

    state = {
        data: checkLS(this.LS_KEY, 'data', []),
        addTodoInput: checkLS(this.LS_KEY, 'inputValue', ''),
        filter: checkLS(this.LS_KEY, 'filter', 'all'),
        searchTerm: checkLS(this.LS_KEY, 'searchTerm', ''),
    };

    getMaxId() {
        return this.state.data.length ? Math.max(...this.state.data.map(el => el.id)) : 0;
    }

    componentDidUpdate() {
        localStorage.setItem(this.LS_KEY, JSON.stringify(this.state));
    }


    getInputValue = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    setChange = (id, key) => {
        const newData = [...this.state.data];
        const idItemIndex = newData.findIndex((elem) => elem.id === id);
        const [idItem] = newData.filter((item) => item.id === id);
        idItem[key] = !idItem[key];
        newData[idItemIndex] = idItem;
        this.setState({ data: newData });
    };

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return { data: data.filter((item) => item.id !== id) };
        });
    };

    addItem = (e) => {
        e.preventDefault();

        if (!this.state.addTodoInput) return;
        const newObject = {
            id: this.getMaxId() + 1,
            label: this.state.addTodoInput,
            important: false,
            isDone: false
        };
        this.setState(({ data }) => {
            return { data: [...data, newObject] };
        });
        this.setState({ addTodoInput: '' });
    };

    getFilterValue = (key) => {
        this.setState({ filter: key });
    };

    filterData = (key) => {
        switch (key) {
        case 'all':
            return this.state.data;
        case 'active':
            return this.state.data.filter((item) => !item.isDone);
        case 'done':
            return this.state.data.filter((item) => item.isDone);
        default: return this.state.data;
        }
    };

    searchData = (arr, key) => {
        if (key) {
            const regex = new RegExp(key);
            return arr.filter((item) => {
                return regex.test(item.label);
            })
        }
        return arr;
    };

    render() {
        const { filter } = this.state;
        const todo = this.state.data.filter((el) => !el.isDone).length;
        const done = this.state.data.length - todo;

        const filtered = this.filterData(this.state.filter);
        const data = this.searchData(filtered, this.state.searchTerm);
        return (
            <article className={s.Todo}>
                <Repo/>
                <Header todo={todo} done={done}/>
                <div className={s.Todo__top}>
                    <SearchPanel getInputValue={this.getInputValue} value={this.state.searchTerm}/>
                    <Filter getFilterValue={this.getFilterValue} currentFilter={filter}/>
                </div>
                <TodoList data={data} setChange={this.setChange} deleteItem={this.deleteItem}/>
                <AddNewItemForm
                    addItem={this.addItem}
                    value={this.state.addTodoInput}
                    getInputValue={this.getInputValue}
                />
            </article>
        );

    }
}

export default Todo;
