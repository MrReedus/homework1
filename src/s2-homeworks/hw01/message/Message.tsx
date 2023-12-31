import React from 'react'
import s from './Message.module.css'

import {message0} from "../HW1";
// нужно создать правильный тип вместо any
import {MessageType} from '../HW1'
import avatar from "../avatar.png";


export type MessagePropsType = {
   message: MessageType
}


// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    // создаёт студент
                    src={message0.user.avatar}
                    alt={"avatar"}
                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        {message0.user.name}
                        {/**/}
                    </div>
                    <p id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {message0.message.text}
                        {/**/}
                    </p>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
                {message0.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default Message
