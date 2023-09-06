export const setPasswordLength = (length) => ({
    type: 'SET_PASSWORD_LENGTH',
    payload: length,
  });

  export const setIncludeUppercase = (includeUppercase) => ({
    type: 'SET_INCLUDE_UPPERCASE',
    payload: includeUppercase,
  });

  export const setIncludeLowercase = (includeLowercase) => ({
    type: 'SET_INCLUDE_LOWERCASE',
    payload: includeLowercase,
  });

  export const setIncludeNumber = (includeNumber) => ({
    type: 'SET_INCLUDE_NUMBER',
    payload: includeNumber
  })

  export const generatePassword = () => ({
    type: 'GENERATE_PASSWORD',
  });
