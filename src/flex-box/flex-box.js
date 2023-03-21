import { Fragment } from 'react'
import styles from './flex-box.module.css'

export default function FlexBox () {

    return (

        <Fragment>

            <div className={styles.wrapper}>

            <div className={styles.box1}>
                <h2>Box1</h2>
                {/* <p>Hi there welcome to cdd flexbox .</p> */}
            </div>

            <div className={styles.box2}>
                <h2>Box2</h2>
                {/* <p>Hi there welcome to cdd flexbox .</p> */}
            </div>

            <div className={styles.box3}>
                <h2>Box3</h2>
                {/* <p>Hi there welcome to cdd flexbox .</p> */}
            </div>

            <div className={styles.box4}>
                <h2>Box4</h2>
                {/* <p>Hi there welcome to cdd flexbox .</p> */}
            </div>

            <div className={styles.box5}>
                <h2>Box5</h2>
                {/* <p>Hi there welcome to cdd flexbox .</p> */}
            </div>

            </div>

            {/* <ol className={styles.list}>
                {
                    new Array(5).fill(1).map(ele => (
                        <li className={styles.item}>hellow</li>
                    ))
                }
            </ol> */}

        </Fragment>

        
    )

}