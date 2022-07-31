import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import {ArrType} from "../../HW7";
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options: ArrType[]
    onChangeOption: (option: string | undefined) => void
    name:string
    value:string |undefined
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption(e.currentTarget.value)// onChange, onChangeOption
    }



    const mappedOptions = options ? options.map((o, i) => ( // map options with key
        <label key={name + '-' + i}>
            <input
                type={name}
                className={`${s.input} + ${o===value && s.active}`}
                onChange={onChangeCallback}
                checked={o===value}
                value={o}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
