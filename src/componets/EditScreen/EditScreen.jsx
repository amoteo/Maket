import React from 'react';
import style from './EditScreen.module.css'
import HeaderEditScreen from "./HeaderEditScreen/HeaderEditScreen.jsx";
import {NavLink} from "react-router-dom";
import ChoiceTypeJuice from "./ChoiceTypeJuice/ChoiceTypeJuice";
import {Scrollbars} from 'react-custom-scrollbars'
import story from '../../Story/Story'
import {typeJuice} from '../../Story/Story'
import fullStar from '../../assets/image/fullStar.png'
import emptyStar from '../../assets/image/fulIcons.png'

import plus from '../../assets/image/plus.png'
import minus from '../../assets/image/minus.png'
import fullPlus from '../../assets/image/plusFull.png'
import Footer from "./Footer/Footer";



class EditScreen extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        choiceTypes:typeJuice.All,
            initialState:story.initialState,
        };
    }

    choiceTypeAll=()=>{
        this.setState((state)=>{ return {choiceTypes:typeJuice.All}})
    }

    choiceTypeSmoothies=()=>{
        this.setState((state)=>{ return {choiceTypes:typeJuice.Smoothies}})
    }

    choiceTypeOats=()=>{
        this.setState((state)=>{ return {choiceTypes:typeJuice.Oats}})
    }

    changeClick=(id)=>{
        this.setState((state)=>{ return state.initialState.items[id].firstClick=true})
    }

    addAllChekCups=()=> {
        this.state.initialState.AllChekedCups=this.state.initialState.AllChekedCups+0.5
    }

    showAllChekCups=()=> {
        return this.state.initialState.AllChekedCups
    }

    testToo=()=>{
        let sum=0
        this.state.initialState.items.map((obj) =>
        {
            obj.firstClick?sum=sum+obj.colCheckedJuice:sum=sum
        })
        this.state.initialState.AllChekedCups=sum
    }

    showDefaultItems=()=>{
        let defaultItems=
           this.state.initialState.items.map((obj) =>
            {
                let content = []

                for (let j = 0; j < obj.colOverStars; j++) {
                    let item = <img className={style.iconStarFull} src={fullStar}/>;
                    content.push(item);
                }

                for (let j = 0; j < obj.colEmptyStars; j++) {
                    let item1 = <img className={style.iconStarEmpty} src={emptyStar}/>;
                    content.push(item1);
                }

                let myBut=obj.firstClick?<div className={style.textDecor}>x{obj.colCheckedJuice}</div>:<div>ADD</div>

                return (
                <div>
                    {
                        (this.state.choiceTypes === obj.type||this.state.choiceTypes===typeJuice.All)?
                            <div className={style.card}>

                                <div> <img className={style.icon} src={obj.srcIcon}/></div>
                                <div className={style.description}>
                                    <div className={style.nameBold}>{obj.name}</div>
                                    <div className={style.typeName}>{obj.type}</div>
                                    <div>{content}</div>
                                </div>

                                <div className={style.button}>
                                    <div>
                                        {obj.firstClick?
                                            <img onClick={
                                                () => {
                                                    this.setState
                                                    (()=>{ return (

                                                        obj.colCheckedJuice<3?obj.colCheckedJuice=obj.colCheckedJuice+0.5
                                                            :obj.colCheckedJuice=obj.colCheckedJuice

                                                        )}
                                                    )
                                                }
                                            } className={style.iconButPlusOrMinus} src={obj.colCheckedJuice===3?fullPlus:plus}/>
                                            :
                                            null
                                        }

                                    </div>

                                    <div>

                                        <a href="#" onClick={() => {
                                            this.changeClick(obj.id)
                                        }} className={style.butAdd}>
                                            <div>{myBut}</div>
                                        </a>

                                    </div>

                                    <div>
                                        {
                                            obj.firstClick?
                                            <img onClick={
                                                () => {
                                                    this.setState
                                                                (()=> {
                                                                    return obj.colCheckedJuice>1?
                                                                    obj.colCheckedJuice=obj.colCheckedJuice-0.5
                                                                        :
                                                                        obj.colCheckedJuice=obj.colCheckedJuice}
                                                                )
                                                }
                                            } className={style.iconButPlusOrMinus} src={minus}/>
                                            :
                                            null
                                        }
                                    </div>
                                </div>
                            </div>
                        :null}
                </div>

                )
            }
        )
        return(
            <div>
                {defaultItems}
            </div>
        )
    }

    render() {
        {this.testToo()}
        return (
            <div>
                <HeaderEditScreen/>
                <ChoiceTypeJuice typeJuice={typeJuice} choiceType={this.state.choiceTypes}
                                 choiceTypeAll={this.choiceTypeAll}
                                 choiceTypeSmoothies={this.choiceTypeSmoothies} choiceTypeOats={this.choiceTypeOats}/>

               <div className={style.wrapperCards}>
                   <Scrollbars style={{width:'100%',height:'100%'}}>
                       {this.showDefaultItems()}
                   </Scrollbars>
               </div>
                <Footer showAllChekCups={this.showAllChekCups}/>
            </div>
        )
    }
}

export default EditScreen;