const initialState = {
    passwordLength: 8, // Default password length
    password: '', // Generated password
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PASSWORD_LENGTH':
            const newPasswordLength = Math.min(30, Math.max(1, action.payload));
            return {
                ...state,
                passwordLength: newPasswordLength,
            };
        case 'GENERATE_PASSWORD':
            return {
                ...state,
                password: generateRandomPassword(state.passwordLength),
            };
        default:
            return state;
    }
};

const generateRandomPassword = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let newPassword = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        newPassword += characters.charAt(randomIndex);
    }
    return newPassword;
};

export default rootReducer;


