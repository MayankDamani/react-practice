import React from 'react'

const Hello = (props) => {
    console.log(props);
    return( 
        <div>
            <p> Hello from {props.name} </p>
        </div>
    )

    // return React.createElement(
    //     'div', 
    //     {id : "hello", className : "demoClass"}, 
    //     React.createElement('p', null, 'Hello from without JSX Component')
    // )
}
export default Hello