
import './components.css'

export default function CustomButton (props) {

    const buttonStyle = {
        background : 'red',
        color : 'white' ,
    }

    //  THIS IS HOW RECEIVES THE PROPS 
    
    return(
        <button 
            className = { `clickButton ${props.customClassName}` }
            onClick={props.onClickFunction}
            style = {props.buttonStyle}
        >
            {props.buttonText}
        </button>
    )
}