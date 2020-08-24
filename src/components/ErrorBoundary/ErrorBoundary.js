import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError : false
        }
    }

    static getDerivedStateFromError(error){
        return{hasError: true}
    }

    componentDidCatch(error, info){
        console.log(error);
        console.log(info);
    }
    
    render() {
        if(this.state.hasError){
            return <h1>Something went wrong!!!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary
/* 
Note: Error Boundary catches eroors in rendering life cycle methods and constructors of the whole tree below them
        It does not catch errors in event Handlers for that you need to use try catch statements.
*/