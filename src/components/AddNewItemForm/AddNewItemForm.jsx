import React from 'react';
import s from './AddNewItemForm.module.scss';

const AddNewItemForm = props => {
    const { addItem, inputValue, getInputValue } = props;
    return (
        <form
            className={s.AddNew}
            onSubmit={(e) => addItem(e)}
        >
            <input
                className={s.AddNew__input}
                type="text"
                onChange={(e) => getInputValue(e)}
                placeholder="New Todo"
                value={inputValue}
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
