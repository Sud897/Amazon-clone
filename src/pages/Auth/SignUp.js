import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthFormLayout from '../../components/UI/Auth/AuthFormLayout';
import { useAuth } from '../../store/AuthProvider';
import styles from './Auth.module.css';
import { signUpValidation } from '../../utils/validate';

const initialInputState = {
    name : '',
    email : '',
    password : '',
    confirmPassword : ''
}

const initialInputErrorState = {
    nameError : '',
    emailError : '',
    passwordError : '',
    confirmPasswordError : ''
}

const SignUp = () => {
    const [inputs , setInputs] = useState(initialInputState);
    const [inputsError , setInputsError] = useState(initialInputErrorState);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState('');

    const { signup} = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name , value} = e.target;
        setInputs(prevInputs => {
            return {
                ...prevInputs,
                [name] : value
            }
        })
    }

    const handleFormSubmit = async(e) => {
        e.preventDefault();
        const {isInvalid , ...errors} = signUpValidation(inputs);
        if(isInvalid) {
            setInputsError(errors);
            return;
        }

        try {
            setLoading(true);
            setError('');
            await signup(inputs.email,inputs.password);
            navigate('/');
        } catch (error) {
            setLoading(false)
            setError('Unable to create amazon account.')
        }
    }

    const nameClasses = `${styles['form-control']} ${inputsError.nameError ? styles['form-control-error'] : ''}`;
    const emailClasses = `${styles['form-control']} ${inputsError.emailError ? styles['form-control-error'] : ''}`;
    const passwordClasses = `${styles['form-control']} ${inputsError.passwordError ? styles['form-control-error'] : ''}`;
    const confirmPasswordClasses = `${styles['form-control']} ${inputsError.confirmPasswordError ? styles['form-control-error'] : ''}`;

    return (
        <AuthFormLayout>
            <div className={styles['form-box']}>
                <h1 className={styles['heading']}>Create Account</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className={nameClasses}>
                        <label>Your Name</label>
                        <input type="text" name='name' value={inputs.name} onChange={handleChange} />
                        {inputsError.nameError && <p>{inputsError.nameError}</p>}
                    </div>
                    <div className={emailClasses}>
                        <label>Email</label>
                        <input type="text" name='email' value={inputs.email} onChange={handleChange} />
                        {inputsError.emailError && <p>{inputsError.emailError}</p>}
                    </div>
                    <div className={passwordClasses}>
                        <label>Password</label>
                        <input type="password" value={inputs.password} placeholder='Atleast 6 characters' name='password' onChange={handleChange} />
                        {inputsError.passwordError && <p>{inputsError.passwordError}</p>}
                    </div>
                    <div className={confirmPasswordClasses}>
                        <label>Re-enter Password</label>
                        <input type="password" name='confirmPassword' value={inputs.confirmPassword} onChange={handleChange} />
                        {inputsError.confirmPasswordError && <p>{inputsError.confirmPasswordError}</p>}
                    </div>
                    <button disabled={loading} className={styles['form-btn']}>{loading ? 'creating account...' : 'Create your Amazon Account'}</button>
                    {error && <p className={styles['error']}>{error}</p>}
                </form>
                <div className={styles['agreement']}>
                    <span>By continuing, you agree to Amazon's</span>
                    <Link to="/"> Conditions of use</Link>
                    <span> and </span>
                    <Link to="/">Privacy Notice.</Link>
                </div>
                <div className={styles['inner-divider']}></div>
                <div className={styles['already-have-an-account']}>
                    <span>Already have an account? </span>
                    <Link to="/signin">Sign-In</Link>
                </div>
            </div>
        </AuthFormLayout>
    )
}

export default SignUp;
