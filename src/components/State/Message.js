import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Welcome Visitor.'
        }
    }

    clickHandler = () => {
        this.setState({
            message : 'Thanks for subscribing'
        })
    }
    
    render() {
        return (
            <div>
                {this.state.message} 
                <button onClick={this.clickHandler}>Click here</button>        
            </div>
        )
    }
}

export default Message
