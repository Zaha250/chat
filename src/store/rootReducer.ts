import user from './user/userSlice';
import signIn from './signIn/signInSlice';
import dialogs from './dialogs/dialogsSlice';

const rootReducer = {
    user,
    signIn,
    dialogs
}

export default rootReducer;