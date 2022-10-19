import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../Redux/chatReducer";
import Chat from "./Chat";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        chat: state.chat
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: (currentDialogId) => {
            dispatch(sendMessageCreator(currentDialogId));
        }
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)

export default ChatContainer;