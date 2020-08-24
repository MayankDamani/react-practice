import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComponent'
import MemoComponent from '../Memo/MemoComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'MD'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'MD'
            })
        }, 2000)
    }
    
    render() {
        console.log('*** Parent Component Render method ***')
        return (
            <div>
                Parent Component
                <MemoComponent name={this.state.name}/>
                {/*<RegularComponent name={this.state.name}></RegularComponent>
                <PureComp name={this.state.name}></PureComp>*/}    
            </div>
        )
    }
}

export default ParentComponent
