import React, { Component } from 'react'

 class RefClass extends Component {
     constructor(props) {
         super(props)
         this.inpRef=React.createRef();
     
         this.state = {
              
         }
     }
     focusInput(){
         this.inpRef.current.focus();

     }
     
    render() {
        return (
            <div>
                <input type="text" ref={this.inpRef}></input>
            </div>
        )
    }
}

export default RefClass
