import React from 'react';
import style from './OtherScreen.module.css'
import {NavLink} from "react-router-dom";
import iconBack from '../../assets/image/icons8-back-26.png'

const OtherScreen=()=>{
    return (
        <div>
            <div className={style.header}>

                <div className={style.back}>
                    <NavLink to='/'> <img src={iconBack}/></NavLink>
                </div>

                <div className={style.title}>
                    <h4>OTHER PAGE</h4>
                </div>

            </div>


        </div>
    );
}

export default OtherScreen;