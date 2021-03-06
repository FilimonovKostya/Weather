import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from './style.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from 'store/store';
import {fetchSearch, onChangeValue} from 'store/reducers/search';
import {ISearch} from './types';

const Search = ({className}: ISearch) => {
    const dispatch = useDispatch()

    const city = useSelector<RootState, string>(state => state.weather.title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeValue(e.currentTarget.value))
    }

    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            dispatch(fetchSearch(city))
        }
    }

    return <>
        <div className={`${style.searchBar} ${style[className]}`}>
            <input type="text" value={city} onChange={onChangeHandler}
                   onKeyPress={onEnterHandler}
                   placeholder="Write City or Country and wait" required/>
            <div className={style.searchIcon}/>
        </div>
        <button className={style.button} onClick={() => dispatch(fetchSearch(city))}>Search</button>
    </>
};

export default Search;