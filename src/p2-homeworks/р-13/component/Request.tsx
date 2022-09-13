import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";

type RequestType = {
    data: string
    onchange: (success:boolean)=>void
}
export const Request = (props:RequestType) => {

    return (
        <div>
            <div>
                Ответ: {props.data}
            </div>
            <SuperCheckbox onChangeChecked={props.onchange}/>
        </div>
    )
}