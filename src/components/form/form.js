import './form.css'

import Button from '../button/button'
import LoginOption from '../login-option/login-option'
import { useState } from 'react';

// importing icons from package called 'react-icons'
// imstall this package by command npm i react-icons

import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";



export default function Form () {

    const [isSignInView , setIsSignInView] = useState(true)

    // isSignInView == false -/> will show signIn View 
    // isSignInView == true -/> will show signUp View 


    // to create 2 signIn Option
    const loginOptions = [
        {
            icon : <FcGoogle/>,
            name : 'Google'
        } ,
        {
            icon : <FaFacebookSquare/>,
            name : 'Facobook'
        }
    ]

    return (
        <div className='wrapper'>

            <h3>Welcome !</h3>

            {/* Sub heading changing depend on which component is this */}
            <p>
                { 
                    isSignInView ? 
                    'Log in your Account ' : 
                    'Create your Account today'
                }
            </p>
            {/* showing name field only in signUp view so ding it in signIn View. */}
            { 
                !isSignInView && 
                    <div>
                        <p>Your Name</p>
                        <input className='imputField'/>
                    </div>
            }

            <div>
                <p>Your Email</p>
                <input className='imputField'/>
            </div>

            <div>
                <p>Your Email</p>
                <input className='imputField'/>
            </div>

            {/* checkbox input field */}

            <div className='container'>
                <div className='checkboxWrapper'>
                    <input className='checkbox' type='checkbox'/>
                    <span>Remember Me .</span>
                </div>
                <p>Forget Password ?</p>
            </div>

            <Button
                buttonText = 'Login'
                customClassName = 'buttonStyle'
            />

            {/* other options to continue */}

            <div className='loginOptions'>
                {loginOptions.map(({name,icon} )=> (
                    <LoginOption 
                        name = {name}
                        icon = {icon}
                    />
                ))}
            </div>

            <p className='redirectText'> 
                { 
                    isSignInView ?  
                    'Dont have Account ?' : 
                    'Already have an account ?' 
                }
                <span onClick={()=>setIsSignInView(!isSignInView)} > 
                    {isSignInView ? 'SignUp' : 'SignIn'}
                </span>
            </p>

        </div>
    )
}