import React from 'react';
import style from './style.module.scss'


const Preloader = () => (
    <div className={style.container}>
        <div className={style.ring}/>
        <div className={style.ring}/>
        <div className={style.ring}/>
    </div>
)

export default Preloader;