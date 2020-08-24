import React from 'react'

function ChildComponent2(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button>*/}
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>{/* Passing parameters */}
        </div>
    )
}

export default ChildComponent2
