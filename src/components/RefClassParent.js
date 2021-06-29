import React, { Component } from 'react'
import RefClass from './RefClass';

 class RefClassParent extends Component {
     constructor(props) {
         super(props)
         this.comRef=React.createRef();
     
         this.state = {
              
         }
     }
     clickHandler =()=>{
         this.comRef.current.focusInput();
     }
     
    render() {
        return (
            <div>
            <RefClass  ref={this.comRef} />
            <button onClick={this.clickHandler}>Click Focus</button>
                
            </div>
        )
    }
}

export default RefClassParent
