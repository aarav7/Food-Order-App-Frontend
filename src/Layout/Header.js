import React from 'react'
import styles from './Header.module.css'
import mainImage from '../assets/mainImage.jpg'
import CartButton from './CartButton'

const Header = props => {

    return (
        <>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <CartButton onClick={props.onClick} />
            </header>
            <div className={styles["main-image"]}>
                <img src={mainImage} alt="A Table Full of Meals!" />
            </div>
        </>
    )
}

export default Header;