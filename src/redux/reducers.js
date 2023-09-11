const initialState = {
    passwordLength: 6,
    includeUppercase: true,
    includeLowercase: false,
    includeNumber: false,
    includeSymbols: false,
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

        // set for uppercase
        case 'SET_INCLUDE_UPPERCASE':
            return {
                ...state,
                includeUppercase: action.payload,
            };

        // set lowercase
        case 'SET_INCLUDE_LOWERCASE':
            return {
                ...state,
                includeLowercase: action.payload,
            };

        // set number
        case 'SET_INCLUDE_NUMBER':
            return {
                ...state,
                includeNumber: action.payload,
            }

        // set symbol
        case 'SET_INCLUDE_SYMBOL':
            return {
                ...state,
                includeSymbols: action.payload,
            }

        // create password
        case 'GENERATE_PASSWORD':
            return {
                ...state,
                password: generatePassword(state),
            };

        // all box are checked
        case 'CHECK_ALL_CHECKBOXES':
            return {
                ...state,
                includeUppercase: true,
                includeLowercase: true,
                includeNumber: true,
                includeSymbols: true,
            };

        // set for only upp or low
        case 'CHECK_EASY_TO_READ':
            return {
                ...state,
                includeUppercase: true,
                includeLowercase: true,
                includeNumber: false,
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
        state.includeNumber ? '1234567890' : '',
        state.includeSymbols ? '!@#$%^&*()_+[]{}|:;,.<>?/' : '',
    ].join('');
    let newPassword = '';
    for (let i = 0; i < state.passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        newPassword += charset.charAt(randomIndex);
    }
    return newPassword
}
export default rootReducer;

