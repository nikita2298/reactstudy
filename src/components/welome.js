import React,{Component} from 'react'
import Greet from './greet'
 class Welcome extends Component{
     render(){
        const {name, heroname}=this.props;
        return ([<h1> Class component {name} </h1>,

       
        
    ])
     }
 }
 export default Welcome;