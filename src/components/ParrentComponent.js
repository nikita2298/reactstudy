import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParrentComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              parentName: 'parent',b:"hghj"
         }
         this.greetParent=this.greetParent.bind(this)
     }
     greetParent(childName)
     {
         alert(`hello ${this.state.parentName} from ${childName}`)
     }
     
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default ParrentComponent
