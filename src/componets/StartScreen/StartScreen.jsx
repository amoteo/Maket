import React from 'react';
import style from './StartScreen.module.css'
import {NavLink} from "react-router-dom";

const StartScreen=()=>{

    return (
        <div>
            <div className={style.title}>
                <h4>START PAGE</h4>
            </div>

            <div className={style.wrapperLinks}>
                <div className={style.divLink}>
                    <NavLink to='/EditScreen' className={style.navLink}>EDIT CUPS</NavLink>
                </div>

                <div className={style.divLink}>
                    <NavLink to='/OtherScreen' className={style.navLink}>OTHER PAGE</NavLink>
                </div>

            </div>


        </div>
    );
}

export default StartScreen;