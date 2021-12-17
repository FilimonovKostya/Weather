import React, {ChangeEvent} from 'react';
import style from './style.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from 'store';
import {onChangeValue} from 'store/reducers/search';


const Search = () => {
    const value = useSelector<RootState, string>(state => state.search.value)
    const dispatch = useDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch(onChangeValue(e.currentTarget.value))

    return (
        <div className={style.searchBar}>
            <input type="text" value={value} onChange={onChangeHandler} placeholder="Write City or Country" required/>
            <div className={style.searchIcon}/>
        </div>
    );
};

export default Search;