import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/logo/logo.png';
import search from '../../assets/search.png';
import globe from '../../assets/globe.png';
import usericon from '../../assets/user.png';
import { useAuth } from '../../store/AuthProvider';
import UserList from './UserList';
import Navlist from './Navlist';
import SearchBox from './SearchBox';
import { useClickOutside , useWindowDimensions } from '../../hooks';



const Navbar = () => {

    const [showUser, setShowUser] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [toggleSearchBox , setToggleSearchBox] = useState(false);
    
    const handleShowUserList = () => setShowUser(!showUser)
    const handleShowNavList = () => setShowNav(!showNav)
    const handleToggleSearchBox = () => setToggleSearchBox(!toggleSearchBox)
    
    const { width } = useWindowDimensions();
    const { user } = useAuth();

    useEffect(()=> {
        if(width > 1040) {
            setShowNav(false)
        }
    },[width])

    const searchBoxRef = useClickOutside(()=> setToggleSearchBox(false))
    const navBarRef = useClickOutside(() => setShowNav(false))
    const userRef = useClickOutside(()=>{setShowUser(false)})

    return (
        <header className={`${styles['navbar']} ${styles['sticky']}`}>
            <div className={styles['nav-container']}>
                <Link to="/" className={styles['nav-logo']}>
                    <img src={logo} alt='amazon-logo' />
                </Link>
                <div className={styles['nav-components']}>
                    <div className={styles['nav-primary']} ref={navBarRef} >
                        <span className={styles['browse']} onClick={handleShowNavList}>Browse <i className="fa fa-sort-down" /></span>
                        <Navlist navStyle={showNav ? styles['nav-responsive-list'] : styles['nav-list']} />
                    </div>
                    <div className={styles['nav-secondary']}>
                        {!user && <div className={styles['btn']}><button>Try for free</button></div>}
                        <div className={styles['search']} ref={searchBoxRef}>
                            {!toggleSearchBox && <img src={search} alt="search-icon"  onClick={handleToggleSearchBox} />}
                            {toggleSearchBox && <SearchBox handleSearchBox = {handleToggleSearchBox} />}
                        </div>
                        { !user && 
                            <div className={styles['language']}>
                                <img src={globe} alt="globe-icon" />
                                <span>EN</span>
                                <i className="fa fa-sort-down" />
                            </div>
                        }
                        <div className={styles['user']} ref={userRef} >
                            <div onClick={handleShowUserList} >
                                <img src={usericon} alt="user-icon" />
                                <i className={showUser ? "fa fa-sort-up" : "fa fa-sort-down"} />
                            </div>
                            {showUser && <UserList onClickOutside={handleShowUserList} />}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
