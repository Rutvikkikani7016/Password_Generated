import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PasswordLength, generatePassword } from '../redux/actions';

const PasswordGenerator = () => {
    const dispatch = useDispatch();
    const passwordLength = useSelector((state) => state.passwordLength);
    const generatedPassword = useSelector((state) => state.password);

    const handleGenerateClick = (e) => {
        e.preventDefault()
        dispatch(generatePassword());
    };

    const handleSliderChange = (e) => {
        dispatch(PasswordLength(parseInt(e.target.value)));
    };

    // for copy
    const handlerCopy = async () => {
        if (generatedPassword) {
            await navigator.clipboard.writeText(generatePassword);
            alert('copied..')
        }
    }

    return (<>
        <div className="container mt-5">
            <h1 className="text-center">Password Generator</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <form id="passwordGeneratorForm">
                                <div className='row'>
                                    <label htmlFor="generatedPassword" className="form-label">Generated Password:</label>
                                    <div className="mb-3 col-9">
                                        <input type="text" className="form-control" value={generatedPassword} id="generatedPassword" readOnly />
                                    </div>
                                    <div className='col-3'>
                                        <button className='btn btn-secondary' onClick={handlerCopy}>copy</button>
                                    </div>
                                </div>
                                <div className='row'>
                                    <label htmlFor="passwordLength" className="form-label">Password Length:</label>
                                    <div className="mb-3 col-3">
                                        <input type="number" className="form-control" value={passwordLength} onChange={(e) => dispatch(PasswordLength(parseInt(e.target.value)))} />
                                    </div>
                                    <div className="mb-1 col-6">
                                        <input type="range" className="form-range" value={passwordLength}
                                            onChange={handleSliderChange} min={0} max={50} id="customRange2" />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className='btn btn-primary' onClick={handleGenerateClick} >Generate Password</button>
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


