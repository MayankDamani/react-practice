import React from 'react'
import './MyStyle.css'

function Stylesheet(props) {
    let classname = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${classname} font-xl`}>Styling in react</h1>
        </div>
    )
}

export default Stylesheet
