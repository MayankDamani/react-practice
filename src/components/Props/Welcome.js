import React from 'react'
import Component from 'react'

class Welcome extends React.Component{
    render(){
        return( 
            <div>
                <h1>Hello {this.props.name}</h1>
                Nickname {this.props.altname}
            </div>
        )
    }
}

export default Welcome