import React from 'react';
import s from './AddNewItemForm.module.scss';

const AddNewItemForm = props => {
    const { addItem } = props;
    return (
        <form className={s.AddNew}>
            <button
                className={s.AddNew__button}
                onClick={(e) => addItem(e)}
            >
                Add New Item
            </button>
        </form>

    );
};

export default AddNewItemForm;
