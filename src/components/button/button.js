import './button.css'


export default function Button (props) {
    return (
        <button className={props.customClassName} onClick = {props.onClickAction}>
            {props.buttonText || 'Click me !'}
        </button>
    )
}