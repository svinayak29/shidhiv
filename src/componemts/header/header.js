import styles from './header.module.css'
import { FcGoogle } from "react-icons/fc";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from 'react';
import MenuCard from '../menu-card/menu-card';

export default function Header () {
    const [isMenuVisible,setIsMenuVisible] = useState(false)

    const pages = [
        'Home',
        'Service',
        'Contact Us' ,
        'About'
    ]

    function openMenu () {
        setIsMenuVisible(true)
    }
    function closeMenu () {
        setIsMenuVisible(false)
    }

    if(isMenuVisible){
        return (
            <MenuCard 
                pages = {pages} 
                handleClickCloseBtn = {closeMenu}
            />
        )
    }
    
    return (
        <header className={styles.header}>
            
            <div className={styles.logoWrapper}>
                <FcGoogle className={styles.logo}/>
                <h3 className={styles.companyName}>Google</h3>
            </div>
            <nav className={styles.navbar}>
                {
                    pages.map(pageName => (
                        <span>{pageName}</span>
                    ))
                }
            </nav>

            <div className={styles.registrationOptions}>
                <p>Login</p>
                <button>Sign Up</button>
            </div>

            <RiMenu3Fill className={styles.menuIcon} onClick= {openMenu}/>

        </header>
    )
}