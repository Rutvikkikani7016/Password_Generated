// actions
const SET_PASSWORD_LENGTH = 'SET_PASSWORD_LENGTH'
const SET_INCLUDE_UPPERCASE = 'SET_INCLUDE_UPPERCASE'
const SET_INCLUDE_LOWERCASE = 'SET_INCLUDE_LOWERCASE'
const SET_INCLUDE_NUMBERS = 'SET_INCLUDE_NUMBERS'
const SET_INCLUDE_SYMBOLS = 'SET_INCLUDE_SYMBOLS'
const GENERATE_PASSWORD = 'GENERATE_PASSWORD'
const CHECK_ALL_CHECKBOXES = 'CHECK_ALL_CHECKBOXES'
const CHECK_EASY_TO_READ = 'CHECK_EASY_TO_READ'
const SET_PASSWORD = 'SET_PASSWORD';


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
export const setIncludeNumbers = (includeNumbers) => ({
    type: SET_INCLUDE_NUMBERS,
    payload: includeNumbers
});

// set symbol
export const setIncludeSymbols = (includeSymbols) => ({
    type: SET_INCLUDE_SYMBOLS,
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
});

export const setPassword = (password) => ({
    type: SET_PASSWORD,
    payload: password,
});
