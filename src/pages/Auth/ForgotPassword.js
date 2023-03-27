import styles from './Auth.module.css';
import AuthFormLayout from '../../components/UI/Auth/AuthFormLayout';
import { emailRegex } from '../../utils/validate';
import { useAuth } from '../../store/AuthProvider';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email,setEmail] = useState('');
    const [error , setError] = useState('');
    const [message , setMessage] = useState('');
    const [loading , setLoading] = useState(false);

    const {resetPassword} = useAuth();

    const handleChange = (e) => setEmail(e.target.value)

    const handleResetPasswordSubmit = async(e) => {
        e.preventDefault();

        if(!emailRegex.test(email)) {
            setError('Enter a valid email');
            return ;
        }

        try {
            setLoading(true);
            setError('');
            await resetPassword(email)
            setMessage('Check your inbox for further instructions')
            setLoading(false)
        } catch (error) {
            setError(error.message)
        }
    }

    const emailClasses = `${styles['form-control']} ${error ? styles['form-control-error'] : ''}`;

    return (
        <AuthFormLayout>
            <div className={styles['form-box']}>
                <h1 className={styles['heading']}>Password Assistance</h1>
                <div className={styles['small-text']}>
                    Enter the email address or mobile phone number associated with your Amazon account.
                </div>
                <form onSubmit={handleResetPasswordSubmit}>
                    <div className={emailClasses}>
                        <label>Email</label>
                        <input type="text" value={email} onChange={handleChange} />
                    </div>
                    <button disabled={loading} className={styles['form-btn']}>Continue</button>
                </form>
                { error && <p className={styles['error']}>{error}</p>}
                {message && <p className={styles['success']}>{message}</p>}
            </div>
            <div className={styles['customer-service']}>
                <h4>Has your email or mobile number changed?</h4>
                <p>
                    If you no longer use the email address associated with your Amazon account, you may contact <Link to="/" >Customer Service</Link> for help restoring access to your account.
                </p>
            </div>
        </AuthFormLayout>
    )
}

export default ForgotPassword
