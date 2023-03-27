import { Fragment } from "react";


import {useNavigate} from 'react-router-dom'

export default function Login () {

    const nevigate = useNavigate()



    const hancldeClickBack = () => {


        nevigate('/')
        // write the code here which will redirect me to home page 
    }

    return (
        <Fragment>

        <h1>Welcome to Login page</h1>
        <button onClick={hancldeClickBack}>Back to home ..</button>


        </Fragment>
    )
}