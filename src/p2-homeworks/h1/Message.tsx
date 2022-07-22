import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.content}>
            <img src={props.avatar} className={s.avatar} alt='avatar'/>

            <div className={s.angle}></div>

            <span className={s.message}>
                <strong className={s.name}>{props.name}</strong>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </span>

        </div>

    )
}

export default Message
