import React, { Component } from 'react'

class HoverCounter extends Component {
    
    render() {
        const {count, incrementCount} = this.props;
        console.log(count);
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>                
            </div>
        )
    }
}

export default HoverCounter
