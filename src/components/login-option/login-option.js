import './login-option.css'
import { FcGoogle } from "react-icons/fc";


export default function LoginOption (props) {
    return (
        <div className='option'>
            {props.icon}
            <p>Continue with {props.name}</p>
        </div>
    )
}