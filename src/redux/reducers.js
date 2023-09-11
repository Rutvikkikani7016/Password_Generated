
const initialState = {
    passwordLength: 6,
    includeUppercase: false,
    includeLowercase: false,
    includeNumbers: false,
    includeSymbols: false,
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
                includeNumbers: action.payload,
            }
        // set for symboal
        case 'SET_INCLUDE_SYMBOL':
            return {
                ...state,
                includeSymbols: action.payload,
            }
        // set for create
        case 'GENERATE_PASSWORD':
            return {
                ...state,
                password: generatePassword(state),
            };

        case 'CHECK_ALL_CHECKBOXES':
            return {
                ...state,
                includeUppercase: true,
                includeLowercase: true,
                includeNumbers: true,
                includeSymbols: true,
            };

        case 'CHECK_EASY_TO_READ':
            return{
                ...state,
                includeUppercase: true,
                includeLowercase: true,
                includeNumbers: false,
                includeSymbols: false,
            };

        default:
            return state;
    }
};

const generatePassword = (state) => {

    const charset = [
        state.includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '',
        state.includeLowercase ? 'abcdefghijklmnopqrstuvwxyz' : '',
        state.includeNumbers ? '1234567890' : '',
        state.includeSymbols ? '!@#$%^&*()_+[]{}""\/-|:;,.<>?' : '',
    ].join('');
    let newPassword = '';
    for (let i = 0; i < state.passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        newPassword += charset.charAt(randomIndex);
    }
    return newPassword
}
export default rootReducer;










