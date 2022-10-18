import userAvatar1 from '../assets/001-user-avatar.jpg';
import userAvatar2 from '../assets/002-user-avatar.jpg';
import userAvatar3 from '../assets/003-user-avatar.jpg';
import userAvatar4 from '../assets/004-user-avatar.jpg';
import userAvatar5 from '../assets/005-user-avatar.jpg';

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    dialogs: [
        {
            id: 0, name: 'Alex', avatar: userAvatar1, messages: [
                { id: 0, dispatchTime: '12:34', text: 'Hello! How are you?' },
                { id: 1, dispatchTime: '12:37', text: 'The online text generator allows you to specify the number of words that will form the number of paragraphs you specify.' },
                { id: 2, dispatchTime: '12:38', text: "However, the generated text will not make sense, but that's not what we need!" },
                { id: 3, dispatchTime: '12:40', text: 'Create your literary masterpiece in one click!' }
            ]
        },
        {
            id: 1, name: 'Ben', avatar: userAvatar2, messages: [
                { id: 0, dispatchTime: '09:12', text: 'Pulvinar cubilia consectetur nostra sed maecenas aliquet himenaeos dolor primis.' },
                { id: 1, dispatchTime: '09:13', text: 'Elementum dapibus finibus pellentesque maecenas accumsan leo ullamcorper tellus, class sodales bibendum sagittis natoque orci semper.' },
                { id: 2, dispatchTime: '16:48', text: "Commodo nibh magnis tempor massa penatibus arcu nam, et facilisi nunc nisl primis efficitur turpis erat, etiam cursus nascetur lobortis metus elit." },
                { id: 3, dispatchTime: '19:54', text: 'Pretium justo consequat maximus faucibus eu cubilia etiam a ac dapibus ultricies, varius vitae pellentesque ut nisi dictumst ligula nostra primis.' }
            ]
        },
        {
            id: 2, name: 'Laura', avatar: userAvatar3, messages: [
                { id: 0, dispatchTime: '21:03', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sit ipsum saepe beatae quisquam?' },
                { id: 1, dispatchTime: '21:28', text: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
                { id: 2, dispatchTime: '21:39', text: "Lorem, ipsum dolor." },
                { id: 3, dispatchTime: '23:18', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est cumque a fugiat corrupti voluptates tempore molestiae ratione odit sint!' }
            ]
        },
        {
            id: 3, name: 'Stefan', avatar: userAvatar4, messages: [
                { id: 0, dispatchTime: '15:09', text: 'Lorem, ipsum dolor.' },
                { id: 1, dispatchTime: '15:13', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dicta alias ipsum sunt, expedita nulla aspernatur quis illum recusandae adipisci nihil ad. Culpa, rem?' },
                { id: 2, dispatchTime: '15:57', text: "Vivamus commodo elit condimentum donec at praesent varius, magnis vestibulum curae conubia risus proin ultrices curabitur, venenatis laoreet sodales per turpis nunc." },
                { id: 3, dispatchTime: '16:01', text: 'Vivamus cursus porttitor purus suscipit phasellus fusce, cubilia donec pellentesque lectus class nibh nec, duis dictumst sagittis tellus vitae.' }
            ]
        },
        {
            id: 4, name: 'Maria', avatar: userAvatar5, messages: [
                { id: 0, dispatchTime: '08:55', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe, nemo doloribus eum quia maxime voluptas.' },
                { id: 1, dispatchTime: '08:55', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum non assumenda iste dolore architecto.' },
                { id: 2, dispatchTime: '08:57', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, similique nesciunt ut ad perspiciatis et eveniet suscipit quam voluptatum saepe molestias aliquam iure doloribus porro." },
                { id: 3, dispatchTime: '08:59', text: 'Hello! How are you?' }
            ]
        }
    ],
    newMessageBody: "",
    currentDialog: 0
}

const chatReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            let neededID = state.dialogs[action.currentDialogId].messages.slice(-1)[0].id + 1;
            let dispatchTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            state.dialogs[action.currentDialogId].messages.push({ id: neededID, text: body, dispatchTime: dispatchTime, myMessage: true });
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