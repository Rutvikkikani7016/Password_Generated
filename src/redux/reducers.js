
const initialState = {
    passwordLength: 6,
    includeUppercase: true,
    includeLowercase: true,
    includeNumber: false,
    //characterType: 'easyToSay',
    password: '',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // for set length
        case 'SET_PASSWORD_LENGTH':
            const newPasswordLength = Math.min(50, Math.max(1, action.payload));
            return {
                ...state,
                passwordLength: newPasswordLength,
            };
        // for set upper
        case 'SET_INCLUDE_UPPERCASE':
            return {
                ...state,
                includeUppercase: action.payload,
            };
        // set for low
        case 'SET_INCLUDE_LOWERCASE':
            return {
                ...state,
                includeLowercase: action.payload,
            };
        // set for number
        case 'SET_INCLUDE_NUMBER':
            return {
                ...state,
                includeNumber: action.payload,
            }
        // set for symboal
        case 'SET_INCLUDE_SYMBOAL' :
            return {
                ...state,
                includeSymboal : action.payload,
            }
        // set for create
        case 'GENERATE_PASSWORD':
            return {
                ...state,
                password: generatePassword(state),
            };

        //case 'SET_CHARACTER_TYPE':
        //    return {
        //        ...state,
        //        characterType: action.payload,
        //    };

        default:
            return state;
    }
};

const generatePassword = (state) => {

    const charset = [
        state.includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '',
        state.includeLowercase ? 'abcdefghijklmnopqrstuvwxyz' : '',
        state.includeNumber ? 1234567890 : '',
        state.includeSyamboal ? '!@#$%^&*()_+[]{}|:;,.<>?/' : '',
    ].join('');
    let newPassword = '';
    for (let i = 0; i < state.passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        newPassword += charset.charAt(randomIndex);
    }
    return newPassword
}
export default rootReducer;


    //    const charset = [
    //        state.includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '',
    //        state.includeLowercase ? 'abcdefghijklmnopqrstuvwxyz' : '',
    //        state.includeNumbers ? '0123456789' : '',
    //        state.includeSymbols ? '!@#$%^&*()_+[]{}|;:,.<>?/' : '',
    //    ].join('');
    //
    //    let newPassword = '';
    //    for (let i = 0; i < state.passwordLength; i++) {
    //        const randomIndex = Math.floor(Math.random() * charset.length);
    //        newPassword += charset.charAt(randomIndex);
    //    }
    //
    //    if (state.characterType === 'easyToSay') {
    //        newPassword = makePasswordEasyToSay(newPassword);
    //    } else if (state.characterType === 'easyToRead') {
    //        newPassword = makePasswordEasyToRead(newPassword);
    //    }
    //    return newPassword;
    //};
    //
    //const makePasswordEasyToSay = (password) => {
    //    // Implement logic to make the password easy to say
    //    // For example, remove visually similar characters
    //    password = password.replace(/[0OoI1l]/g, '');
    //    return password;
    //};
    //
    //const makePasswordEasyToRead = (password) => {
    //    // Implement logic to make the password easy to read
    //    // For example, use characters that are less likely to be confused
    //    password = password.replace(/[0OoI1l]/g, 'AaBbCcDdEeFfGgHhJjKkMmNnPpQqRrSsTtUuVvWwXxYyZz23456789');
    //    return password;
    //};



//export default combineReducers({
//    password: passwordReducer,
//});








