const initialState = {
    passwordLength: 6,
    includeUppercase: true,
    includeLowercase: false,
    includeNumbers: false,
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
        case 'SET_INCLUDE_NUMBERS':
            return {
                ...state,
                includeNumbers: action.payload,
            }

        // set symbol
        case 'SET_INCLUDE_SYMBOLS':
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
                includeNumbers: true,
                includeSymbols: true,
            };

        // set for only upp or low
        case 'CHECK_EASY_TO_READ':
            return {
                ...state,
                includeUppercase: true,
                includeLowercase: true,
                includeNumbers: false,
                includeSymbols: false,
            };

        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.payload, // Update the password
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

