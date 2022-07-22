import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyDownAddUser:(event:KeyboardEvent<HTMLInputElement>)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyDownAddUser} // деструктуризация пропсов
) => {

    const inputClass = error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <div>
                <SuperInputText
                    value={name}
                    onKeyDown={onKeyDownAddUser}
                    onChange={setNameCallback}
                    onBlur={setNameCallback}
                    error={error}
                    className={inputClass}
                    spanClassName={s.testSpanError}
                />
            </div>
           {/* <div>
                <input
                    onKeyDown={onKeyDownAddUser}
                    onChange={setNameCallback}
                    onBlur={setNameCallback}

                    value={name}
                    className={inputClass}

                />
                <div className={s.error}>{error}</div>
            </div>*/}

            <SuperButton className={s.button} onClick={addUser} disabled={!name}>
                add
            </SuperButton>
            {/*<button className={s.button} onClick={addUser} disabled={!name}>add</button>*/}
            <span className={s.count}>{totalUsers}</span>

        </div>
    )
}

export default Greeting
