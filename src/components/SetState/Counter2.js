import React, { Component } from 'react'

class Counter2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count : 0
        }
    }

    // clickHandler = () => {
    //     this.setState({
    //         count : this.state.count + 1 // call to setState() is async so here console.log() is called before setState().
    //     })
    //     console.log(this.state.count)
    // }

    // clickHandler = () => {
    //     this.setState({
    //         count : this.state.count + 1
    //     }, () => {
    //         console.log('Callback value', this.state.count) // To execute some code after setState() do not place that code after setState() instead place that code in the callback function as 2nd param of setState().
    //     })
    //     console.log(this.state.count)
    // }

    // incrementFive(){  // For better performance React groups multiple setState() call to a single update. So to perform update based on prevState we need to pass prevState as a function argument to the setState().   
    //     this.clickHandler()
    //     this.clickHandler()
    //     this.clickHandler()
    //     this.clickHandler()
    //     this.clickHandler()
    // }

    clickHandler = () => {
        this.setState((prevState) => ({
            count : prevState.count + 1 // When you want to update the state based on prevState pass function as a argument to the setState() instead of regular object. Can make use of props, just pass props as function argument.
        }))
        console.log(this.state.count)
    }
    
    render() {
        return (
            <div>
                Count {this.state.count}<br />
                <button onClick={this.clickHandler}>Increment</button>
            </div>
        )
    }
}

export default Counter2
