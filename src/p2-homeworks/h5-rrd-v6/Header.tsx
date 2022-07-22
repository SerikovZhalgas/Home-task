import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {


    return (
        <div className={s.items}>
            <span className={s.item}>
                <NavLink className={s.textColor} to={'/pre-junior'}>pre-junior</NavLink>
            </span>
            <span className={s.item}>
                <NavLink className={s.textColor} to={'/junior'}>junior</NavLink>
            </span>
            <span className={s.item}>
                <NavLink className={s.textColor} to={'/junior+'}>junior+</NavLink>
            </span>
            <span className={s.item}><span className={s.kub}></span></span>
        </div>
    )
}

export default Header
