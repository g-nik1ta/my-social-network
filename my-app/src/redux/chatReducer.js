import axios from 'axios';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEMPRORAY_BODY = 'UPDATE-NEW-TEMPORARY-POST-TEXT';
const SET_DIALOGS = 'SET_DIALOGS';

let initialState = {
    dialogs: [],
    newMessageBody: "",
    newMessageTemprorayBody: ""
}

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEMPRORAY_BODY:
            return {
                ...state,
                newMessageTemprorayBody: action.temporaryBody
            }
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let currentDialog = 0;
            for (let i = 0; i < state.dialogs.length; i++, currentDialog++) {
                if (state.dialogs[i].id == action.currentDialogId) {
                    break;
                }
            }
            let body = state.newMessageBody;
            let temporaryBody = state.newMessageTemprorayBody;
            let neededID = state.dialogs[currentDialog].messages.length;
            let dispatchTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            let newMessageState = {
                ...state.dialogs[currentDialog],
                messages: [...state.dialogs[currentDialog].messages, { id: neededID, text: body, dispatchTime: dispatchTime, myMessage: true }],
                newMessageBody: ''
            };
            if (temporaryBody != '') {
                newMessageState = {
                    ...state.dialogs[currentDialog],
                    messages: [...state.dialogs[currentDialog].messages, { id: neededID, text: temporaryBody, dispatchTime: dispatchTime }],
                };
            }
            state.newMessageTemprorayBody = '';
            axios
                .patch('http://localhost:3000/dialogs/' + (currentDialog + 1), {messages: newMessageState.messages})
                .then(response => {
                    console.log(response);
                })

            return {
                ...state,
                dialogs: state.dialogs.map(
                    dialog => dialog.id === Number(action.currentDialogId)
                        ? {
                            ...dialog,
                            messages: newMessageState.messages
                        }
                        : dialog
                )
            }
        case SET_DIALOGS:
            return {
                ...state,
                dialogs: [...state.dialogs, ...action.dialogs]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (currentDialogId) => ({
    type: SEND_MESSAGE,
    currentDialogId: currentDialogId
}
)
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body,
}
)
export const updateNewMessageTemprorayBodyCreator = (temporaryBody) => ({
    type: UPDATE_NEW_MESSAGE_TEMPRORAY_BODY,
    temporaryBody
}
)
export const setDialogsCreator = (dialogs) => {
    return {
        type: SET_DIALOGS,
        dialogs
    }
}

export default chatReducer;