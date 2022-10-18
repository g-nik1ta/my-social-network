import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../Redux/chatReducer";
import standartAvatar from '../../assets/standart-avatar.png';
import sendImg from '../../assets/png/003-send-message.svg';

const Chat = (props) => {
    let friends = props.chat.dialogs.map(friend => <Friend name={friend.name} id={friend.id} userAvatar={friend.avatar} lastSms={friend.messages.slice(-1)[0]} />);
    let friendsChat = props.chat.dialogs.map(friendChat => <FriendChat dispatch={props.dispatch} id={friendChat.id} friendMessages={friendChat.messages} />);

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
                <Routes>
                    <Route path="" element={<DefaultChatSection />} />
                </Routes>
            </div>
        </div>
    )
}

const DefaultChatSection = () => {
    return (
        <div className="default-chat-section">
            <div className="message-item"></div>
            <p>
                Select a person from the left menu to start your conversation.
            </p>
        </div>
    )
}

const Friend = (props) => {
    let path = "dialogs/" + props.id;
    let avatar = standartAvatar;
    if (props.userAvatar !== undefined) {
        avatar = props.userAvatar;
    }

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
    let lastID = props.friendMessages.slice(-1)[0].id;
    let friendMessages = props.friendMessages.slice(0).reverse().map(friendMessage => <FriendMessage lastID={lastID} id={friendMessage.id} text={friendMessage.text} myMessage={friendMessage.myMessage} />);
    friendMessages.push(<InputMyMessageBlock dispatch={props.dispatch} />);

    return (
        <Routes>
            <Route path={path} element={friendMessages} />
        </Routes>
    )
}

const FriendMessage = (props) => {
    if (props.myMessage) {
        return (<p className="my-message-text">{props.text}</p>)
    } else
    return (<p className="message-text">{props.text}</p>)
}

const InputMyMessageBlock = (props) => {
    const textarea = document.querySelector("textarea");
    const chatUsers = document.querySelector(".chatUsers");

    let onSendMessageClick = () => {
        let currentDialogId = chatUsers.querySelector(".active").dataset.dialogId;
        if (textarea.value !== '' && textarea.value.trim() !== '') {
            props.dispatch(sendMessageCreator(currentDialogId));
            textarea.value = '';
        } else textarea.value = '';
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className="inpute-my-message">
            <textarea
                onChange={onNewMessageChange}
                placeholder='Send message'>
            </textarea>
            <button onClick={onSendMessageClick}>
                <img src={sendImg} alt="send-img" />
            </button>
        </div>
    )
}

export default Chat;