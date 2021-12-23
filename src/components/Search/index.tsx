import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from './style.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from 'store/store';
import {fetchSearch, onChangeValue} from 'store/reducers/search';


const Search = () => {
    const dispatch = useDispatch()

    const value = useSelector<RootState, string>(state => state.weather.title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch(onChangeValue(e.currentTarget.value))
    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => e.code === 'Enter' && dispatch(fetchSearch(value))

    return (
        <div className={style.searchBar}>
            <input type="text" value={value} onChange={onChangeHandler}
                   onKeyPress={onEnterHandler}
                   placeholder="Write City or Country" required/>
            <div className={style.searchIcon}/>
        </div>
    );
};

export default Search;