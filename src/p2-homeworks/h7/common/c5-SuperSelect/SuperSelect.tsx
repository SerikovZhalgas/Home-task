import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import {ArrType} from "../../HW7";
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: ArrType[]
    onChangeOption: (option: string | undefined) => void
    value:string |undefined
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        value,
        ...restProps
    }
) => {
    const mappedOptions = options ? options.map((el,i)=>(
        <option key={el + ' ' + i} value={el}>{el}</option>
    )) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption(e.currentTarget.value)// onChange, onChangeOption
    }

    return (
        <select value={value} className={s.select} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
