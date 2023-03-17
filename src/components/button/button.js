import './button.css'


export default function Button (props) {
    return (
        <button className={props.customClassName}>
            {props.buttonText || ''}
        </button>
    )
}