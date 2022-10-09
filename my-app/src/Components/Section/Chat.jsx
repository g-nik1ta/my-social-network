import React from "react";
import { NavLink } from "react-router-dom";

const ChatItem = (props) => {
    let path = '/chat/' + props.id;
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const ChatItemMessage = (props) => {
    return (
        <div>
            <p>{props.text}</p>
        </div>
    )
}

const Chat = (props) => {
    let chatElements = props.chat.map(chatItem => <ChatItem name={chatItem.name} id={chatItem.id} />);
    let chatElementsMessages = props.chat[0].messages.map(chatItemMessage => <ChatItemMessage text={chatItemMessage.text} />)
    return (
        <div className="chat">
            <div className="chatUsers">
                {chatElements}
            </div>
            <div className="chatMessages">
                {chatElementsMessages}
            </div>
        </div>
    )
}

export default Chat;