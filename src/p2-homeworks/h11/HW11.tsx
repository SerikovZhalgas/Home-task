import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import { TwoThumbInputRange } from "react-two-thumb-input-range"


function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState<[number,number]>([0,100])

    const onChangeRange = (value: number) => {
        setValue1(value)
        setValue2([value,value2[1]])
    }

    const onChangeDoubleRange = (values: [number, number]) => {
        if(values[0]===values[1]){

        }
        setValue2(values)
        setValue1(values[0])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    inputValue={value1}
                    onChangeRange={onChangeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                    <TwoThumbInputRange
                        onChange={onChangeDoubleRange}
                        values={value2}
                        min={0}
                        max={100}
                        showLabels={false}

                    />
                <span>{value2[1]}</span>
            </div>
            <div>
                <span>{value1}</span>

                <span>{value2[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
