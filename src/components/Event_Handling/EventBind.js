import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }

        //this.clickHandler = this.clickHandler.bind(this);
    }
    
    // clickHandler(){
    //     this.setState({
    //         message : 'GoodBye'
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            message : 'GoodBye'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>*/} {/* Not recommended as every time brand new instance of event handler is generated */}
                {/* <button onClick={() => this.clickHandler()}>Click</button>*/}{/* Arrow Function syntax: Not used bcoz of performance implications */}
                <button onClick={this.clickHandler}>Click</button>{/* Recommended Approach as event event is binded only once i.e. in constructor */}
            </div>
        )
    }
}

export default EventBind
