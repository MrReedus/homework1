import React from 'react'
import s from './FriendMessage.module.css'
import {friendMessage0, MessageType} from "../HW1";
import { MessagePropsType } from '../message/Message';

// создать тип вместо any и отобразить приходящие данные



// interface
const FriendMessage = (props: MessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src={friendMessage0.user.avatar}
                    alt={"avatar"}
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}

                    >
                        {/*создаёт студент*/}
                        {friendMessage0.user.name}
                        {/**/}
                    </div>
                    <p
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {friendMessage0.message.text}
                        {/**/}
                    </p>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                {friendMessage0.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
