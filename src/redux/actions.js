// Action's
const SET_PASSWORD_LENGTH = 'SET_PASSWORD_LENGTH'
const GENERATE_PASSWORD = 'GENERATE_PASSWORD'
const SET_INCLUDE_UPPERCASE = 'SET_INCLUDE_UPPERCASE'
const SET_INCLUDE_LOWERCASE = 'SET_INCLUDE_LOWERCASE'
const SET_INCLUDE_NUMBER = 'SET_INCLUDE_NUMBER'
const SET_INCLUDE_SYMBOL = 'SET_INCLUDE_SYMBOL'
const CHECK_ALL_CHECKBOXES = 'CHECK_ALL_CHECKBOXES'
const CHECK_EASY_TO_READ = 'CHECK_EASY_TO_READ'

// set password length
export const setPasswordLength = (length) => ({
    type: SET_PASSWORD_LENGTH,
    payload: length,
});

// set password in upper
export const setIncludeUppercase = (includeUppercase) => ({
    type: SET_INCLUDE_UPPERCASE,
    payload: includeUppercase,
});

// set password in lower
export const setIncludeLowercase = (includeLowercase) => ({
    type: SET_INCLUDE_LOWERCASE,
    payload: includeLowercase,
});

// set password in number
export const setIncludeNumbers = (includeNumbers) => ({
    type: SET_INCLUDE_NUMBER,
    payload: includeNumbers
});

// set password in symbol
export const setIncludeSymbols = (includeSymbols) => ({
    type: SET_INCLUDE_SYMBOL,
    payload: includeSymbols
})

// generate password
export const generatePassword = () => ({
    type: GENERATE_PASSWORD,
});

export const checkAllCheckboxes = () => ({
    type: CHECK_ALL_CHECKBOXES,
  });

export const easyToRead = () => ({
    type: CHECK_EASY_TO_READ,
})

