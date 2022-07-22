import React, {useState} from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {

    const [checked, setChecked] = useState<boolean>(false)

    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix
    const priorityClass= s.item + " " + s[props.affair.priority]

    return (
        <SuperCheckbox
            checked={checked}
            onChangeChecked={setChecked}
        >
            <span className={s.affair}>
                <div className={s.item}>{props.affair.name}</div>
                <div className={priorityClass}>{props.affair.priority}</div>

                <SuperButton
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={deleteCallback}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>
                {/*<button onClick={deleteCallback}>X</button>*/}
            </span> {/*// этот текст попадёт в children*/}
        </SuperCheckbox>
        /*<div className={s.affair}>
            <div className={s.item}>{props.affair.name}</div>
            <div className={priorityClass}>{props.affair.priority}</div>

            <SuperButton
                red // пропсу с булевым значением не обязательно указывать true
                onClick={deleteCallback}
            >
                delete {/!*!// название кнопки попадёт в children*!/}
            </SuperButton>
            {/!*<button onClick={deleteCallback}>X</button>*!/}
        </div>*/
    )
}

export default Affair
