import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'MD'
        }
        console.log('LifeCycleA Constructor');
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps');
        return null  // returns new state or null.
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Mayank Damani'
        })
    }

    render() {
        console.log('LifecycleA Render Method');
        return (
            <div>
                LifeCycleA
                <LifeCycleB />
                <button onClick={this.changeState}>Click Here</button>
            </div>
        )
    }
}

export default LifeCycleA
