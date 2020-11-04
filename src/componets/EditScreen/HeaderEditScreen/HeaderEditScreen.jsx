import React from 'react';
import style from './HeaderEditScreen.module.css'
import {NavLink, Route, Switch} from "react-router-dom";
import iconBack from '../../../assets/image/icons8-back-26.png'


const HeaderEditScreen=()=>{
    return (
        <div className={style.header}>

            <div className={style.back}>
                <NavLink to='/'><img src={iconBack}/></NavLink>
            </div>

            <div className={style.title}>
                <h4>EDIT CUPS</h4>
            </div>

        </div>

    );
}

export default HeaderEditScreen;