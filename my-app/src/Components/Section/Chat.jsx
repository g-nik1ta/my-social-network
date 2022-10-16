import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../Redux/chatReducer";

const Friend = (props) => {
    let path = "dialogs/" + props.id;
    return (
        <NavLink data-dialog-id={props.id} to={path}>{props.name}</NavLink>
    )
}

const FriendChat = (props) => {
    let path = 'dialogs/' + props.id;
    let friendMessages = props.friendMessages.map(friendMessage => <FriendMessage text={friendMessage.text} />);

    return (
        <Routes>
            <Route path={path} element={friendMessages} />
        </Routes>
    )
}

const FriendMessage = (props) => { return (<p>{props.text}</p>) }

const Chat = (props) => {
    let state = props.store.getState().chat;
    let friends = state.dialogs.map(friend => <Friend name={friend.name} id={friend.id} />);
    let friendsChat = state.dialogs.map(friendChat => <FriendChat id={friendChat.id} friendMessages={friendChat.messages} />);
    const textarea = document.querySelector("textarea");
    const chatUsers = document.querySelector(".chatUsers");

    let onSendMessageClick = () => {
        let currentDialogId = chatUsers.querySelector(".active").dataset.dialogId;
        props.store.dispatch(sendMessageCreator(currentDialogId));
        textarea.value = '';
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }


    return (
        <div className="chat">
            <div className="chatUsers">
                {friends}
            </div>
            <div className="chatMessages">
                {friendsChat}
                <div>
                    <textarea
                        onChange={onNewMessageChange}
                        placeholder='send message'>
                    </textarea>
                </div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    )
}

export default Chat;