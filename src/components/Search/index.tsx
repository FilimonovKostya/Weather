import React from 'react';
import style from './style.module.scss'


const Search = () => {
    return (
        <div className={style.searchBar}>
            <input type="text" placeholder="Write City or Country" required/>
            <div className={style.searchIcon}/>
        </div>
    );
};

export default Search;