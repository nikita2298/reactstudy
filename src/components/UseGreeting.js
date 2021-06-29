import React, { Component } from 'react'
//conditional rendaring
export class UseGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        // let message;
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome Mona</div> 
        // }
        // else
        // message=<div>Welcome Guest</div> 
        // if(this.state.isLoggedIn)
        // return (
        //     <div>
        //        <div>Welcome Mona</div> 
        //   </div> )
        //   else
        //   return (
        //     <div>
        //        <div>Welcome guest</div> 
        //   </div> )


        return (
            this.state.isLoggedIn ? (
            <div>Welcome Mona</div>) : (
            <div>Welcome Guest</div> )
     
         )
    }
}

export default UseGreeting
