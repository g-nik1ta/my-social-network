import React from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

const ChatFriend = (props) => {
    let path = "dialogs/" + props.id;
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const ChatItem = (props) => {
    let path = 'dialogs/' + props.id;
    let userChatingHistory = props.chatingHistory.map(userChatingHistoryItem => <ChatItemMessages text={userChatingHistoryItem.text} />);

    return (
        <Routes>
            <Route path={path} element={userChatingHistory} />
        </Routes>
    )
}

const ChatItemMessages = (props) => {
    return (
        <p>{props.text}</p>
    )
}

const Chat = (props) => {
    let chatFriendElements = props.chat.map(chatFriend => <ChatFriend name={chatFriend.name} id={chatFriend.id} />);
    let chatFriendItem = props.chat.map(chatItem => <ChatItem id={chatItem.id} chatingHistory={chatItem.messages} />);
    return (
        <div className="chat">
            <div className="chatUsers">
                {chatFriendElements}
            </div>
            <div className="chatMessages">
                {chatFriendItem}
            </div>
        </div>
    )
}

export default Chat;