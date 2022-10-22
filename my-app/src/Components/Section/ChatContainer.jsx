import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator, updateNewMessageTemprorayBodyCreator } from "../../Redux/chatReducer";
import Chat from "./Chat";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        chat: state.chat,
        newMessageBody: state.chat.newMessageBody
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (currentDialogId) => {
            dispatch(sendMessageCreator(currentDialogId));
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        updateNewMessageTemprorayBody: (temporaryBody) => {
            dispatch(updateNewMessageTemprorayBodyCreator(temporaryBody));
        }
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)

export default ChatContainer;