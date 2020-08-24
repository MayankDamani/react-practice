import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();
        this.callBackRef = null //older approach
        this.setCallBackRef = (element) => {
            this.callBackRef = element
        }
    }

    componentDidMount(){
        if(this.callBackRef != null){
            this.callBackRef.focus()
        }

        // this.inputRef.current.focus();
        // console.log(this.inputRef);
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCallBackRef}/>
                <button onClick={this.clickHandler}>Click here</button>                
            </div>
        )
    }
}

export default RefsDemo

/* Ref steps 

Why Ref??

=> To directly access the DOM element/nodes.

STEP 1: Create ref using React.createRef().
STEP 2: Attach created ref with the DOM element using ref attribute.

Note: ref object holds current property which is DOM element.
*/

/* Callback Ref (Older approach) 

STEP 1: Create a property and assign null value.
STEP 2: Create a method which assign DOM element to the property created in STEP 1.
STEP 3: Attach ref created in STEP 2 to the DOM element.

In Callback Ref we can access the DOM element properties without using current property.

Note: When component mounts React call the Ref with the DOM element and when component unmounts React call the ref with null value.
        Hence we need to check if the value exists for the Ref or not. 
*/
