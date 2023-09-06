const initialState = {
    passwordLength: 8,
    includeUppercase: true,
    includeLowercase: true,
    password: '',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PASSWORD_LENGTH':
            const newPasswordLength = Math.min(30, Math.max(1, action.payload));
            return {
                ...state,
                passwordLength: newPasswordLength,
            };
        case 'SET_INCLUDE_UPPERCASE':
            return {
                ...state,
                includeUppercase: action.payload,
            };
        case 'SET_INCLUDE_LOWERCASE':
            return {
                ...state,
                includeLowercase: action.payload,
            };
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
    ].join('');
    let newPassword = '';
    for (let i = 0; i < state.passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        newPassword += charset.charAt(randomIndex);
    }
    return newPassword;
};

export default rootReducer;








