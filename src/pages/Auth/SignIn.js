import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthFormLayout from '../../components/UI/Auth/AuthFormLayout';
import { useAuth } from '../../store/AuthProvider';
import styles from './Auth.module.css';
import { signInValidation } from '../../utils/validate';

const initialInputState = {
    email : '',
    password : ''
}

const initialInputErrorState = {
    emailError : '',
    passwordError : ''
}

const SignIn = () => {
    const [inputs , setInputs] = useState(initialInputState);
    const [inputsError , setInputsError] = useState(initialInputErrorState);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState('');

    const {signin} = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs(prevInputs =>{
            return {
                ...prevInputs,
                [e.target.name] : e.target.value
            }
        })
    }

    const handleFormSubmit = async(e) => {
        e.preventDefault();
        const {isInvalid , ...errors} = signInValidation(inputs);
        if(isInvalid) {
            setInputsError(errors);
            return ;
        }

        try {
            setLoading(true)
            setError('')
            await signin(inputs.email , inputs.password)
            navigate('/');
        } catch (error) {
            setLoading(false)
            setError('Failed to sign in.')
        }
    }


    
    const emailClasses = `${styles['form-control']} ${inputsError.emailError ? styles['form-control-error'] : ''}`;
    const passwordClasses = `${styles['form-control']} ${inputsError.passwordError ? styles['form-control-error'] : ''}`;

    return (
        <AuthFormLayout>
            <div className={styles['form-box']}>
                <h1 className={styles['heading']}>Sign-In</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className={emailClasses}>
                        <label>Email</label>
                        <input type="text" value={inputs.email} name='email' onChange={handleChange} />
                        {inputsError.emailError && <p>{inputsError.emailError}</p>}
                    </div>
                    <div className={passwordClasses}>
                        <div className={styles['password']}>
                            <label>Password</label>
                            <Link to="/forgot-password">Forgot your password?</Link>
                        </div>
                        <input type="password" value={inputs.password} name='password' onChange={handleChange} />
                        {inputsError.passwordError && <p>{inputsError.passwordError}</p>}
                    </div>
                    <button disabled={loading} className={styles['form-btn']}>{loading ? 'signing-in...' : 'Sign-In'}</button>
                    {error && <p className={styles['error']}>{error}</p>}
                </form>
                <div className={styles['agreement']}>
                    <span>By continuing, you agree to Amazon's</span>
                    <Link to="/"> Conditions of use</Link>
                    <span> and </span>
                    <Link to="/">Privacy Notice.</Link>
                </div>
                <div className={styles['divider']}>
                    <h5>New to Amazon?</h5>
                </div>
                <span className={styles['create-account-button']}>
                    <Link to="/signup">Create your Amazon Account</Link>
                </span>
            </div>
        </AuthFormLayout>
    )
}

export default SignIn;
