import React from 'react';
// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    setPasswordLength,
    setIncludeUppercase,
    setIncludeLowercase,
    setIncludeNumber,
    setIncludeSymbols,
    checkAllCheckboxes,
    easyToRead,
    generatePassword,
} from '../redux/actions';

const PasswordGenerator = () => {
    const dispatch = useDispatch();
    const { passwordLength, includeUppercase, includeLowercase, includeNumber, includeSymbols, password } = useSelector((state) => state);

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

    const handlerCopy = () => {
        if (password) {
            var text = document.getElementById("Password");
            text.select();
            document.execCommand("copy");
            alert("Copied the Password");
        }
    }

    const handleSelectAll = () => {
        dispatch(checkAllCheckboxes());
    };

    const handleEasyToRead = () => {
        dispatch(easyToRead());
    }

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
                                        <input type="text" className="form-control" value={password} id="Password" readOnly />
                                    </div>
                                    <div className='mb-3 col-3'>
                                        <button className='btn btn-secondary' onClick={handlerCopy}>copy</button>
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
                                    <label>
                                        <input type="radio" name='radio1' onClick={handleSelectAll} /> Select All &nbsp;
                                        <input type='radio' name='radio1' onClick={handleEasyToRead} /> Easy to Read &nbsp;
                                        <input type='radio' name='radio1' /> Easy to Say &nbsp;
                                    </label>&nbsp;
                                    <label htmlFor="passwordLength" className="form-label"><b>Select one of the checkboxes:</b></label>
                                    <label>
                                        <input type="checkbox" checked={includeUppercase} onChange={(e) => dispatch(setIncludeUppercase(e.target.checked))} /> Add Uppercase &nbsp;
                                        <input type="checkbox" checked={includeLowercase} onChange={(e) => dispatch(setIncludeLowercase(e.target.checked))} /> Add Lowercase &nbsp;
                                        <input type='checkbox' checked={includeNumber} onChange={(e) => dispatch(setIncludeNumber(e.target.checked))} /> Add number &nbsp;
                                        <input type='checkbox' checked={includeSymbols} onChange={(e) => dispatch(setIncludeSymbols(e.target.checked))} /> Add Symbol
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
        </div>
    </>
    );
};

export default PasswordGenerator;