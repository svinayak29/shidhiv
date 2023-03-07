import { Fragment } from "react"

export default function PersonDescription (props) {

    return (
        <Fragment>
            <h3>{props.name}</h3>
            <h4>{props.age}</h4>
        </Fragment>
    )
}