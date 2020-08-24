import React from 'react'

// function Greet()
// {
//     return <h1> Hello World</h1>
// } 

const Greet = (props) => {
    console.log(props.name);
    //console.log(props.children.props.altname)   Nickname {props.children.props.altname}
    return( 
        <div>
            <h1>Hello {props.name} altname {props.altname}</h1>
            {props.children} {/* If a dynamic content is passed then use props.children. If the content is passed then props.children will render it otherwise it will return nothing. */}
        </div>
    )
}
export default Greet

// if export default greet is used then we can import a component with any name