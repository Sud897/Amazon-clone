import styles from './AuthFormLayout.module.css';
import logo from '../../../assets/logo/logo3.png';
import { Link } from 'react-router-dom';

const AuthFormLayout = ({children}) => {
  return (
    <div className={styles['auth-outer-box']}>
        <img src={logo} alt="amazon=logo" />
        <div className={styles['auth-inner-box']}>
            {children}
        </div>
        <div className={styles['auth-form-footer']}>
          <Link to="/">Conditions of use</Link>
          <span className={styles['auth-form-separator']}></span>
          <Link to="/">Privacy Notice</Link>
          <span className={styles['auth-form-separator']}></span>
          <Link to="/">Help</Link>
        </div>
        <div className={styles['auth-form-footer-copyright']}>&#169; Amazon Prime Clone</div>
    </div>
  )
}

export default AuthFormLayout;
