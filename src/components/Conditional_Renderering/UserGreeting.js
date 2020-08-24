import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    // Dont write if else conditions in return() as it is JSX not JavaScript.
    render() {
        return this.state.isLoggedIn && <div>Welcome MD</div>

        // return(
        //     this.state.isLoggedIn ? <div>Welcome MD</div> : <div>Welcome Guest</div>
        // )

        // let message;
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome MD</div>
        // }
        // message = <div>Welcome Guest</div>

        // return(
        //     <div>{message}</div>
        // )

        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome MD</div>
        //     )
        // }
        // return (
        //     <div>Welcome Guest</div>
        // )
    }
}

export default UserGreeting
