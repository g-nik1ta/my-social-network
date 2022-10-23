import React from "react";
import { 
    sendMessageCreator, 
    updateNewMessageBodyCreator, 
    updateNewMessageTemprorayBodyCreator, 
    setDialogsCreator } from "../../../Redux/chatReducer";
import {connect} from "react-redux";
import Chat from "./Chat";


let mapStateToProps = (state) => {
    return {
        chat: state.chat
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
        },
        setDialogs: (dialogs) => {
            dispatch(setDialogsCreator(dialogs))
        }
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)

export default ChatContainer;