import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../Redux/chatReducer";
import userAvatar from '../../assets/user-avatar.png';

const Friend = (props) => {
    let path = "dialogs/" + props.id;
    let avatar = props.UserAvatar;
    // if (props.userAvatar != 0) {
        // avatar = props.userAvatar;

    return (
        <NavLink data-dialog-id={props.id} to={path}>
            <div className="userAvatar">
                <img src={avatar} alt="userAvatar" />
                <i></i>
            </div>
            <div className="text-block">
                <h4>{props.name}</h4>
                <p>{props.lastSms.text}</p>
            </div>
            <div className="add-info">
                <p className="dispatch-time">{props.lastSms.dispatchTime}</p>
                <p className="number-unread-sms"></p>
            </div>
        </NavLink>
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
    let friends = props.chat.dialogs.map(friend => <Friend name={friend.name} id={friend.id} UserAvatar={friend.avatar} lastSms={friend.messages.slice(-1)[0]} />);
    let friendsChat = props.chat.dialogs.map(friendChat => <FriendChat id={friendChat.id} friendMessages={friendChat.messages} />);
    const textarea = document.querySelector("textarea");
    const chatUsers = document.querySelector(".chatUsers");

    let onSendMessageClick = () => {
        let currentDialogId = chatUsers.querySelector(".active").dataset.dialogId;
        props.dispatch(sendMessageCreator(currentDialogId));
        textarea.value = '';
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }


    return (
        <div className="chat">
            <div className="chatUsers">
                <h2>Chats</h2>
                <div className="user-messages-search">
                    <button></button>
                    <input type="text" placeholder="Search messages of users" />
                </div>
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