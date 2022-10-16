const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-POST-TEXT';

const chatReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = ""; 
            let neededID = state.dialogs[action.currentDialogId].messages.slice(-1)[0].id + 1;
            state.dialogs[action.currentDialogId].messages.push({ id: neededID, text: body });
            return state;
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
        body: body
    }
)

export default chatReducer;