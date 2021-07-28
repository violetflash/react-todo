import React from 'react';
import s from './SearchPanel.module.scss';

const SearchPanel = props => {
    return (
        <input
            className={s.Search}
            type="search"
            placeholder="search"
        />
    )

};

export default SearchPanel;
