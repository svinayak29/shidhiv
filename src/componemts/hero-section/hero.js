import styles from './hero.module.css'
import Button from '../button/button'

export default function HeroSection () {

    return (
        <div className={styles.wrapper}>
            <div className={styles.leftSec}>
                <h2>Lets bring the team togather,at Google .</h2>
                <p>we help you manage your work and daily tasks at your office </p>
                <Button/>

            </div>
            <div className={styles.rightSec}>

                <div className={styles.imgWrapper}>

                <img src='https://images.pexels.com/photos/15332223/pexels-photo-15332223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                height={'100%'} width = {'100%'}
                />
                    
                </div>

            </div>
            

        </div>
    )
}