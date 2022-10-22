import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import standartAvatar from '../../assets/standart-avatar.png';
import sendImg from '../../assets/png/003-send-message.svg';

const Chat = (props) => {
    let onSendMessageClick = () => {
        const chatUsers = document.querySelector(".chatUsers");
        const textarea = document.querySelector("textarea");
        let currentDialogId = chatUsers.querySelector(".active").dataset.dialogId;
        
        if (textarea.value == '') {
            props.sendMessage(currentDialogId);
            document.querySelector(".temporary-user-messange-input").value = '';
        }

        if (textarea.value !== '' && textarea.value.trim() !== '') {
            props.sendMessage(currentDialogId);
            textarea.value = '';
        } else textarea.value = '';
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    let TemporaryonNewMessageChange = (e) => {
        let temporaryBody = e.target.value;
        props.updateNewMessageTemprorayBody(temporaryBody);
    }
    let friends = props.chat.dialogs.map(friend => <Friend lastSms={friend.messages[friend.messages.length - 1]} name={friend.name} userAvatar={friend.avatar} id={friend.id} key={friend.id} />);
    let friendsChat = props.chat.dialogs.map(friendChat => <FriendChat TemporaryonNewMessageChange={TemporaryonNewMessageChange} friendMessages={friendChat.messages} id={friendChat.id} onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange} key={friendChat.id} />);

    return (
        <div className="chat">
            <div className="chatUsers">
                <div className="user-messages-search">
                    <button></button>
                    <input type="search" placeholder="Search messages of users" />
                </div>
                <div className="friends-block">
                    {friends}
                </div>
            </div>
            {friendsChat}
            <Routes>
                <Route path="" element={
                    <div className="chatMessages">
                        <DefaultChatSection />
                    </div>} />
            </Routes>
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
    let friendMessages = props.friendMessages.map(friendMessage => <FriendMessage text={friendMessage.text} myMessage={friendMessage.myMessage} key={friendMessage.id} />);

    return (
        <Routes>
            <Route path={path} element={
                <div className="chatMessages">
                    <div className="messanges-block">{friendMessages}</div>
                    <InputMyMessageBlock onSendMessageClick={props.onSendMessageClick} onNewMessageChange={props.onNewMessageChange} />
                    <input onChange={props.TemporaryonNewMessageChange} className="temporary-user-messange-input" type="text" placeholder="simulate user messagne input" />
                </div>
            } />
        </Routes>
    )
}

const FriendMessage = (props) => {
    if (props.myMessage) {
        return (<p className="my-message">{props.text}</p>)
    } else
        return (<p className="message">{props.text}</p>)
}

const InputMyMessageBlock = (props) => {
    return (
        <div className="inpute-my-message">
            <textarea
                onChange={props.onNewMessageChange}
                placeholder='Send message'>
            </textarea>
            <button onClick={props.onSendMessageClick}>
                <img src={sendImg} alt="send-img" />
            </button>
        </div>
    )
}

export default Chat;