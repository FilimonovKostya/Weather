import React from 'react';
import style from './style.module.scss'
import {useSelector} from "react-redux";
import {RootState} from "store/store";


const Preloader = () => {

    const errorMessage = useSelector<RootState, string>(state => state.status.errorMessage)

    return <div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.ring}/>
            <div className={style.ring}/>
            <div className={style.ring}/>
        </div>
        {errorMessage && <span> {errorMessage} </span>}
    </div>
}

export default Preloader;