import { Fragment } from 'react'
import style from './dummy.module.css'

export default function Dummy1 () {

    //  heading and p tag  and input tag will have some default margin



    return (

        <Fragment>

        <div className={style.wrapper}>
                    {/* <h3 className={style.heding1}>hello there ...!!</h3> */}
                    {
                        new Array(10).fill(1).map(ele => (
                            <p className={style.para}>para</p>
                        ))
                    }
        </div>

        <div className={style.container}>

        </div>

        </Fragment>
        
    )
}