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
});

export const setIncludeSymbols = (includeSymbols) => ({
    type: 'SET_INCLUDE_SYMBOL',
    payload: includeSymbols
})

export const generatePassword = () => ({
    type: 'GENERATE_PASSWORD',
});

// set all box are checked
export const checkAllCheckboxes = () => ({
    type: "CHECK_ALL_CHECKBOXES",
});

// set for only two box
export const easyToRead = () => ({
    type: "CHECK_EASY_TO_READ",
})

//  export const setCharacterType = (characterType) => ({
//    type: 'SET_CHARACTER_TYPE',
//    payload: characterType,
//  });