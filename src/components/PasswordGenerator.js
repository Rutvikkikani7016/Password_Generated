import React from 'react';
// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    setPasswordLength,
    setIncludeUppercase,
    setIncludeLowercase,
    setIncludeNumbers,
    setIncludeSymbols,
    checkAllCheckboxes,
    easyToRead,
    generatePassword,
    setPassword
} from '../redux/actions';

const PasswordGenerator = () => {
    const dispatch = useDispatch();

    const { passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols, password } = useSelector((state) => state);

    const handleGenerate = (e) => {
        e.preventDefault()
        dispatch(generatePassword());
    };
    //    useEffect((e) => {
    //        e.preventDefault();
    //        dispatch(generatePassword());
    //        dispatch(setPasswordLength(parseInt(e.target.value)));
    //    });
    const handleSliderChange = (e) => {
        dispatch(setPasswordLength(parseInt(e.target.value)));
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        dispatch(setPassword(password));
    };

    const handlerCopy = () => {
        if (password) {
            var text = document.getElementById("Password");
            text.select();
            document.execCommand("copy");
            alert("Copied the Password");
        }
    };

    const handleSelectAll = () => {
        dispatch(checkAllCheckboxes());
    };

    const handleEasyToRead = () => {
        dispatch(easyToRead());
    };

    const handleEasyToSay = () => {
        //disable all the radio button
        document.getElementById("number").disabled = true;
        document.getElementById("symbol").disabled = true;

        //get the value if checkbox is checked
        var dev = document.getElementById("myCheck").checked;
        if (dev === false) {
            //enable all the radio button
            document.getElementById("number").disabled = false;
            document.getElementById("symbol").disabled = false;
        }
    };

    return (<>
        <div className="container mt-5">
            <h1 className="text-center">Password Generator</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <label htmlFor="Password" className="form-label">Generated Password:</label>
                                <div className='row'>
                                    <div className="mb-3 col-9">
                                        <input type="text" className="form-control" value={password} id="Password" onChange={handlePasswordChange} />
                                    </div>
                                    <div className='mb-3 col-3'>
                                        <button className='btn btn-secondary' onClick={handlerCopy}>copy</button>
                                    </div>
                                </div>

                                <div className="progress">
                                    <div className={`progress-bar bg-danger`} style={{ width: `${(passwordLength < 3) * 100}%` }}>
                                        {/*{passwordLength}*/}Poor
                                    </div>
                                    <div className={`progress-bar bg-warning`} role="progressbar" style={{ width: `${(passwordLength >= 3 && passwordLength <= 6) * 100}%` }}>
                                        {/*{passwordLength}*/}Weak
                                    </div>
                                    <div className={`progress-bar bg-info`} role="progressbar" style={{ width: `${(passwordLength >= 7 && passwordLength <= 8) * 100}%` }}>
                                        {/*{passwordLength}*/}Better
                                    </div>
                                    <div className={`progress-bar bg-success`} role="progressbar" style={{ width: `${(passwordLength >= 9) * 100}%` }}>
                                        {/*{passwordLength}*/}Strong
                                    </div>
                                </div>

                                <label htmlFor="passwordLength" className="form-label">Password Length:</label>
                                <div className='row'>
                                    <div className="mb-3 col-3">
                                        <input type="number" className="form-control" value={passwordLength} onChange={(e) => dispatch(setPasswordLength(parseInt(e.target.value)))} />
                                    </div>
                                    <div className="mb-1 col-6">
                                        <input type="range" className="form-range" value={passwordLength} onChange={handleSliderChange} min={0} max={50} id="customRange" />
                                    </div>
                                </div>

                                <div className='row'>
                                    <label htmlFor='passwordLength' className="form-label"><b>Select one of the radio boxes:</b></label>
                                    <div>
                                        <div>
                                            <input type="radio" name='radio1' onClick={handleSelectAll} /> Select All &nbsp;
                                        </div>
                                        <div>
                                            <input type='radio' name='radio1' onClick={handleEasyToRead} /> Easy to Read &nbsp;
                                        </div>
                                        <div>
                                            <input type='radio' name='radio1' id='myCheck' onClick={handleEasyToSay} /> Easy to Say &nbsp;
                                        </div>
                                    </div>&nbsp;
                                    <label htmlFor="passwordLength" className="form-label"><b>Select one of the checkboxes:</b></label>
                                    <label>
                                        <input type="checkbox" checked={includeUppercase} onChange={(e) => dispatch(setIncludeUppercase(e.target.checked))} /> Add Uppercase &nbsp;
                                    </label>
                                    <label>
                                        <input type="checkbox" checked={includeLowercase} onChange={(e) => dispatch(setIncludeLowercase(e.target.checked))} /> Add Lowercase &nbsp;
                                    </label>
                                    <label>
                                        <input type='checkbox' checked={includeNumbers} id='number' name='number' onChange={(e) => dispatch(setIncludeNumbers(e.target.checked))} /> Add number &nbsp;
                                    </label>
                                    <label>
                                        <input type='checkbox' checked={includeSymbols} id='symbol' name='symbol' onChange={(e) => dispatch(setIncludeSymbols(e.target.checked))} /> Add Symbol
                                    </label>
                                </div><br />
                                <div className="text-center">
                                    <button className='btn btn-primary' onClick={handleGenerate} >Generate Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>
    );
};

export default PasswordGenerator;