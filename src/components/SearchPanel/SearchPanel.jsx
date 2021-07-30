import React from 'react';
import s from './SearchPanel.module.scss';

const SearchPanel = ({ getInputValue, value }) => {
    return (
        <input
            name="searchTerm"
            className={s.Search}
            type="search"
            placeholder="search"
            autoComplete="off"
            onChange={(e) => getInputValue(e)}
            value={value}
        />
    )

};

export default SearchPanel;
