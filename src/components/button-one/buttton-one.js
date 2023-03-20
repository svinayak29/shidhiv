import { Fragment } from 'react'
import './button-one.css'

import styles from './button-one.module.css'

// button-one.css
// button-one.module.css




// class -/> className 
// name conflicts 
// cs files

//  css files has global scope
//  name conflicts  


//  question ways to aske 
//  answer delivery 

//  module.css 

//  this files had local scope by default (global scope issue get resolved)
//  it generates unique calss names (naming conflict issue get resolved)
//  composition 


//  

//  mobile - > 360px - 1024px (mobile)
//  screen size  > 1024px (desktop view)













export default function ButtonOne () {
    return (
        <Fragment>

            <button
            className={styles.buttonStyle}
            >Button One</button>

            <h1 className={styles.headOne}>hello im first</h1>
            <h1 className={styles.headTwo}>hello i am second</h1>

            <h1 className={styles.changingStyle}>I am changing my css by screen size ...</h1>

        </Fragment>
        
    )
}