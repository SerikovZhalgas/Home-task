import React from 'react'
import Message from "./Message";

const messageData1 = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Angel',
    message: 'Hi! How are you?',
    time: '22:22',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData1.avatar}
                name={messageData1.name}
                message={messageData1.message}
                time={messageData1.time}
            />


            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
           {/* <AlternativeMessage
                avatar={messageData2.avatar}
                name={messageData2.name}
                message={messageData2.message}
                time={messageData2.time}/>
            <hr/>*/}
        </div>
    )
}

export default HW1
