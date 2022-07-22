import React, {ChangeEvent, KeyboardEvent, MouseEventHandler, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void// need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const trimmedName = event.currentTarget.value.trim()
        if (trimmedName) {
            setName(trimmedName)
            error && setError('')
        } else {
            name && setName('')
            setError("name is require!")
        }
        // need to fix
    }
    const addUser = () => {
        if(name){
            addUserCallback(name)
            alert(`Hi ${name}!`)
            setName('')// need to fix
        }
    }

    const onKeyDownAddUser = (event:KeyboardEvent<HTMLInputElement>) => {
        if(event.key==="Enter" && event.ctrlKey && name) {
            addUser()
        }
    }

    const totalUsers = users.length
    // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyDownAddUser={onKeyDownAddUser}
        />
    )
}

export default GreetingContainer
