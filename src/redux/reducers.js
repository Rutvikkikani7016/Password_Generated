const initialState = {
    passwordLength: 6,
    includeUppercase: true,
    includeLowercase: true,
    includeNumber: false,
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
        // set for create
        case 'GENERATE_PASSWORD':
            return {
                ...state,
                password: generatePassword(state),
            };

        default:
            return state;
    }
};

const generatePassword = (state) => {

    const charset = [
        state.includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '',
        state.includeLowercase ? 'abcdefghijklmnopqrstuvwxyz' : '',
        state.includeNumber ? 1234567890 : '',
    ].join('');
    let newPassword = '';
    for (let i = 0; i < state.passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        newPassword += charset.charAt(randomIndex);
    }
    return newPassword;
};

export default rootReducer;








