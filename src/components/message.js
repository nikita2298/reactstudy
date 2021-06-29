import React,{Component} from 'react'
import Greet from './greet'
 class Message extends Component{
     constructor()
     {
         super();
         this.state={
             message: 'welcome visitores'
         }
     }
     changeMessage()
     {
         this.setState({message:"Thanku For subscribing"})
     }
     render(){
        return (
        <div>

              <h1>{this.state.message}</h1>
              <button onClick={()=>this.changeMessage()}>Subscibe</button>

        </div>
       
       
    
    )
     }
 }
 export default Message;