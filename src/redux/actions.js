export const PasswordLength = (length) => ({
    type: 'SET_PASSWORD_LENGTH',
    payload: length,
  });

  export const generatePassword = () => ({
    type: 'GENERATE_PASSWORD',
  });

