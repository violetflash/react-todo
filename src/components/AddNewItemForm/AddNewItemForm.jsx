import React from 'react';
import s from './AddNewItemForm.module.scss';

const AddNewItemForm = ({ addItem, value, getInputValue }) => {
    return (
        <form
            className={s.AddNew}
            onSubmit={(e) => addItem(e)}
        >
            <input
                name='addTodoInput'
                className={s.AddNew__input}
                type="text"
                onChange={(e) => getInputValue(e)}
                placeholder="New Todo"
                value={value}
            />
            <button
                className={s.AddNew__button}
            >
                Add
            </button>
        </form>

    );
};

export default AddNewItemForm;
