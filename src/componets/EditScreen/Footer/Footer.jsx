import style from "../EditScreen.module.css";
import React from "react";

const Footer = (props) => {
    return (
        <div className={style.footer}>

            <div className={style.descrSUBMIT}>
                <span className={style.descrStatic}>YOUR BOX</span>
                <div className={style.descrDinam}>
                    <span className={style.ChoiceColProducts}>{props.showAllChekCups()}/9</span> CUPS
                </div>

            </div>

            <div>
                <button onClick={() => alert(`Количество выбранных коктельев ${props.showAllChekCups()}`)}
                        className={style.SUBMIT}>SUBMIT
                </button>
            </div>

        </div>

    )
}

export default Footer
