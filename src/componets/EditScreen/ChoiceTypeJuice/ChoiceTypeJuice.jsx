import React from 'react';
import style from './ChoiceTypeJuice.module.css'
import {NavLink} from "react-router-dom";
import iconBack from '../../../assets/image/point_green-512.png'

const ChoiceTypeJuice=(props)=>{
    return (
        <div>
            <div className={style.types}>
                <div>
                    <a href="#" onClick={props.choiceTypeAll} className={`${style.type} ${props.choiceType===props.typeJuice.All?style.active:null}`}>All</a>
                    {props.choiceType===props.typeJuice.All?<div><img className={style.greenPoint} src={iconBack}/></div>:null}
                </div>
                <div><a href="#" onClick={props.choiceTypeSmoothies} className={`${style.type} ${props.choiceType===props.typeJuice.Smoothies?style.active:null}`}>Smoothies</a>
                    {props.choiceType===props.typeJuice.Smoothies?<div><img className={style.greenPoint} src={iconBack}/></div>:null}
                </div>
                <div><a href="#" onClick={props.choiceTypeOats} className={`${style.type} ${props.choiceType===props.typeJuice.Oats?style.active:null}`}>Oats</a>
                    {props.choiceType===props.typeJuice.Oats?<div><img className={style.greenPoint} src={iconBack}/></div>:null}
                </div>
            </div>

        </div>
    );
}

export default ChoiceTypeJuice;