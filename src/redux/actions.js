// actions
const SET_PASSWORD_LENGTH = 'SET_PASSWORD_LENGTH'
const SET_INCLUDE_UPPERCASE = 'SET_INCLUDE_UPPERCASE'
const SET_INCLUDE_LOWERCASE = 'SET_INCLUDE_LOWERCASE'
const SET_INCLUDE_NUMBER = 'SET_INCLUDE_NUMBER'
const SET_INCLUDE_SYMBOL = 'SET_INCLUDE_SYMBOL'
const GENERATE_PASSWORD = 'GENERATE_PASSWORD'
const CHECK_ALL_CHECKBOXES = 'CHECK_ALL_CHECKBOXES'
const CHECK_EASY_TO_READ = 'CHECK_EASY_TO_READ'


// set length
export const setPasswordLength = (length) => ({
    type: SET_PASSWORD_LENGTH,
    payload: length,
});


// set uppercase
export const setIncludeUppercase = (includeUppercase) => ({
    type: SET_INCLUDE_UPPERCASE,
    payload: includeUppercase,
});


// set lowercase
export const setIncludeLowercase = (includeLowercase) => ({
    type: SET_INCLUDE_LOWERCASE,
    payload: includeLowercase,
});


// set number
export const setIncludeNumber = (includeNumber) => ({
    type: SET_INCLUDE_NUMBER,
    payload: includeNumber
});

// set symbol
export const setIncludeSymbols = (includeSymbols) => ({
    type: SET_INCLUDE_SYMBOL,
    payload: includeSymbols
})

// generate password
export const generatePassword = () => ({
    type: GENERATE_PASSWORD,
});

// all box are checked
export const checkAllCheckboxes = () => ({
    type: CHECK_ALL_CHECKBOXES,
});

// set for only two box
export const easyToRead = () => ({
    type: CHECK_EASY_TO_READ,
})

