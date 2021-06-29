import React, { Component } from 'react'

export class Person extends Component {
    render() {
         const {name1, key}=this.props;
         console.log(this.props);
        return (
            <div>
                <h2>I am {this.props.person.name}   </h2>
                {/* <h1>keyyyyy{this.props.person.key}</h1> */}
                {/* <h1>{key}</h1> */}
                <h2>lk{name1}</h2>
            </div>
        )
    }
}

export default Person
