import {Request} from "./component/Request";
import {requestAPI} from "./api/RequestsApi";
import {useState} from "react";

export const HW13 = () => {
    const [data, setData] = useState<string>('ждем ответ)')

    const onchange = async (success: boolean) => {
        try {
            let res = await requestAPI.postValue(success).then(res=>res.data.errorText)
            setData(res)
            console.log(data)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            homeworks 13
            <Request data={data} onchange={onchange}/>
        </div>
    )
}