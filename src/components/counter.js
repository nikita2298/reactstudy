import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() 
  {
    //this.setState({count: this.state.count+1},()=>{console.log("call back",this.state.count)})
    // console.log(this.state.count);
    this.setState((prevstate,props)=>({
        count:prevstate.count+1,
    }))
}
    inc3()
    {
        this.increment();
        this.increment();
        this.increment();
    }
 
    
  render() {
    return (
      <div>
        count-{this.state.count}
        <button onClick={() => this.inc3()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
