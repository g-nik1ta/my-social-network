import userAvatar1 from '../assets/001-user-avatar.jpg';
import userAvatar2 from '../assets/002-user-avatar.jpg';
import userAvatar3 from '../assets/003-user-avatar.jpg';
import userAvatar4 from '../assets/004-user-avatar.jpg';
import userAvatar5 from '../assets/005-user-avatar.jpg';
import userAvatar6 from '../assets/006-user-avatar.jpg';

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEMPRORAY_BODY = 'UPDATE-NEW-TEMPORARY-POST-TEXT';

let initialState = {
    dialogs: [
        {
            id: 0, name: 'Alex', avatar: userAvatar1, messages: [
                { id: 0, dispatchTime: '12:34', text: 'Hello! How are you?' },
                { id: 1, dispatchTime: '12:35', myMessage: true, text: "Hi! I'm fine." },
                { id: 2, dispatchTime: '12:37', text: 'The online text generator allows you to specify the number of words that will form the number of paragraphs you specify.' },
                { id: 3, dispatchTime: '12:38', myMessage: true, text: 'Vicinity relation sensible sociable surprise screened no up as.' },
                { id: 4, dispatchTime: '12:38', text: "However, the generated text will not make sense, but that's not what we need!" },
                { id: 5, dispatchTime: '12:40', text: 'Create your literary masterpiece in one click!' }
            ]
        },
        {
            id: 1, name: 'Maria', avatar: userAvatar6, messages: [
                { id: 0, dispatchTime: '11:24', text: "Hey, what do you want to eat for dinner?" },
                { id: 1, dispatchTime: '11:25', myMessage: true, text: "Mm, maybe steak and potatoes." },
                { id: 2, dispatchTime: '11:26', text: 'That sounds cool, but have you forgotten what day it is?' },
                { id: 3, dispatchTime: '11:27', myMessage: true, text: 'And what day is today?' },
                { id: 4, dispatchTime: '11:27', text: "It's Friday, which means we're going to a restaurant!!" },
                { id: 5, dispatchTime: '11:27', myMessage: true, text: "That's right, I completely forgot. We agreed last week that we'd go to a nice place and have a nice meal. So where would you like to go?" },
                { id: 6, dispatchTime: '11:27', text: "Honestly, I really want to eat sushi, but since you don't like it, let's go somewhere else." },
                { id: 7, dispatchTime: '11:28', myMessage: true, text: 'Maria, we can go to "Mamma Mia" and eat pasta. Would you like to have dinner there?' },
                { id: 8, dispatchTime: '11:30', text: "Hmm, I know they serve great pasta there, but I'm not in the mood to eat it. Why don't we order pizza and watch a movie at home?" },
                { id: 9, dispatchTime: '11:31', myMessage: true, text: "Oh, that's a great idea." },
                { id: 10, dispatchTime: '12:14', text: "What time do you get home?" },
                { id: 11, dispatchTime: '12:17', myMessage: true, text: "I'll be home around 6 p.m. If you want I can go to the store and get some more." },
                { id: 12, dispatchTime: '12:22', text: "Buy some juice, please." },
                { id: 13, dispatchTime: '12:23', myMessage: true, text: "Okay)" },
                { id: 14, dispatchTime: '12:25', text: "Thank you, honey❤️" }
            ]
        },
        {
            id: 2, name: 'Mariana', avatar: userAvatar5, messages: [
                { id: 0, dispatchTime: '08:33', myMessage: true, text: "Needed feebly dining oh talked wisdom oppose at." },
                { id: 1, dispatchTime: '08:33', myMessage: true, text: "Ladies others the six desire age." },
                { id: 2, dispatchTime: '08:55', text: 'Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it.' },
                { id: 3, dispatchTime: '08:56', text: 'On on produce colonel pointed. Just four sold need over how any.' },
                { id: 4, dispatchTime: '15:57', myMessage: true, text: "Style too own civil out along. Perfectly offending attempted add arranging age gentleman concluded." },
                { id: 5, dispatchTime: '16:01', text: "One gravity son brought shyness waiting regular led ham." },
                { id: 6, dispatchTime: '16:03', text: 'Its son him ferrars proceed six parlors?' }
            ]
        },
        {
            id: 3, name: 'Ben', avatar: userAvatar2, messages: [
                { id: 0, dispatchTime: '09:12', text: 'From they fine john he give of rich he.' },
                { id: 1, dispatchTime: '09:13', text: 'They age and draw mrs like.' },
                { id: 2, dispatchTime: '09:15', myMessage: true, text: 'Bed uncommonly his discovered for estimating far.' },
                { id: 3, dispatchTime: '09:16', myMessage: true, text: 'Him yourself joy moderate off repeated laughter outweigh screened.' },
                { id: 4, dispatchTime: '09:48', text: "Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not." },
                { id: 5, dispatchTime: '15:54', text: 'Moment an little remain no up lively no.' },
                { id: 6, dispatchTime: '17:13', myMessage: true, text: 'Outlived it received he material.' }
            ]
        },
        {
            id: 4, name: 'Laura', avatar: userAvatar3, messages: [
                { id: 0, dispatchTime: '21:02', myMessage: true, text: 'Own her miss cold last.' },
                { id: 1, dispatchTime: '21:03', text: 'Civility vicinity graceful is it at.' },
                { id: 2, dispatchTime: '21:08', myMessage: true, text: 'It so numerous if he outlived disposal. How but sons mrs lady when.' },
                { id: 3, dispatchTime: '21:23', text: 'Improve up at to on mention perhaps raising.' },
                { id: 4, dispatchTime: '21:39', text: "Lorem, ipsum dolor." },
                { id: 5, dispatchTime: '23:40', text: 'Behaved an or suppose justice. Seemed whence how son rather easily and change missed.' },
                { id: 6, dispatchTime: '21:41', text: "Am it regard stairs branch thirty length afford." },
                { id: 7, dispatchTime: '21:54', myMessage: true, text: 'Am it regard stairs branch thirty length afford.' }
            ]
        },
        {
            id: 5, name: 'Stefan', avatar: userAvatar4, messages: [
                { id: 0, dispatchTime: '15:09', text: 'Lorem, ipsum dolor.' },
                { id: 1, dispatchTime: '15:57', text: "Wrote water woman of heart it total other." },
                { id: 2, dispatchTime: '16:01', text: 'Of we be have it lose gate bred. Do separate removing or expenses in. Had covered but evident chapter matters anxious.' },
                { id: 3, dispatchTime: '16:03', myMessage: true, text: "Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried." },
                { id: 4, dispatchTime: '16:54', myMessage: true, text: "Adieus it no wonder spirit houses." },
            ]
        },
        {
            id: 6, name: 'User', messages: [
                { id: 0, dispatchTime: '15:09', text: 'Lorem, ipsum dolor.' },
                { id: 1, dispatchTime: '15:57', text: "Wrote water woman of heart it total other." },
                { id: 2, dispatchTime: '16:01', text: 'Of we be have it lose gate bred. Do separate removing or expenses in. Had covered but evident chapter matters anxious.' },
                { id: 3, dispatchTime: '16:03', myMessage: true, text: "Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried." },
                { id: 4, dispatchTime: '16:54', myMessage: true, text: "Adieus it no wonder spirit houses." },
            ]
        },
        {
            id: 7, name: 'User', messages: [
                { id: 0, dispatchTime: '15:09', text: 'Lorem, ipsum dolor.' },
                { id: 1, dispatchTime: '15:57', text: "Wrote water woman of heart it total other." },
                { id: 2, dispatchTime: '16:01', text: 'Of we be have it lose gate bred. Do separate removing or expenses in. Had covered but evident chapter matters anxious.' },
                { id: 3, dispatchTime: '16:03', myMessage: true, text: "Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried." },
                { id: 4, dispatchTime: '16:54', myMessage: true, text: "Adieus it no wonder spirit houses." },
            ]
        },
        {
            id: 8, name: 'User', messages: [
                { id: 0, dispatchTime: '15:09', text: 'Lorem, ipsum dolor.' },
                { id: 1, dispatchTime: '15:57', text: "Wrote water woman of heart it total other." },
                { id: 2, dispatchTime: '16:01', text: 'Of we be have it lose gate bred. Do separate removing or expenses in. Had covered but evident chapter matters anxious.' },
                { id: 3, dispatchTime: '16:03', myMessage: true, text: "Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried." },
                { id: 4, dispatchTime: '16:54', myMessage: true, text: "Adieus it no wonder spirit houses." },
            ]
        },
        {
            id: 9, name: 'User', messages: [
                { id: 0, dispatchTime: '15:09', text: 'Lorem, ipsum dolor.' },
                { id: 1, dispatchTime: '15:57', text: "Wrote water woman of heart it total other." },
                { id: 2, dispatchTime: '16:01', text: 'Of we be have it lose gate bred. Do separate removing or expenses in. Had covered but evident chapter matters anxious.' },
                { id: 3, dispatchTime: '16:03', myMessage: true, text: "Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried." },
                { id: 4, dispatchTime: '16:54', myMessage: true, text: "Adieus it no wonder spirit houses." },
            ]
        }
    ],
    newMessageBody: "",
    newMessageTemprorayBody: "",
    currentDialog: 0
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
            let body = state.newMessageBody;
            let temporaryBody = state.newMessageTemprorayBody;
            let neededID = state.dialogs[action.currentDialogId].messages.length;
            let dispatchTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            let newMessageState = {
                ...state.dialogs[action.currentDialogId],
                messages: [...state.dialogs[action.currentDialogId].messages, { id: neededID, text: body, dispatchTime: dispatchTime, myMessage: true }],
                newMessageBody: ''
            };
            console.log(state.newMessageTemprorayBody);
            if (temporaryBody != '') {
                newMessageState = {
                    ...state.dialogs[action.currentDialogId],
                    messages: [...state.dialogs[action.currentDialogId].messages, { id: neededID, text: temporaryBody, dispatchTime: dispatchTime }],
                };
            }
            state.newMessageTemprorayBody = '';

            return {
                ...state,
                dialogs: state.dialogs.map(
                    dialog => dialog.id === Number(action.currentDialogId)
                        ? {
                            ...dialog,
                            messages: newMessageState.messages
                        }
                        : dialog
                ),
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

export default chatReducer;