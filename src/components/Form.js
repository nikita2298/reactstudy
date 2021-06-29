import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:'',
              topic:'react'
         }
             
        }
        handleUsername = (event) =>
        {
            this.setState({
                username: event.target.value
            })
            console.log(this.state.username)

        }
        topicChange=(event)=>{
            this.setState({topic:event.target.value})

        }
        handleSubmit=(event)=>{
            alert(`${this.state.username}  ${this.state.topic}`)
            event.preventDefault();

        }
     
    render() {
        const {user,topic}=this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={user} onChange={this.handleUsername}></input>
                </div>
                <div>
                    <label>Topics</label>
                    <select value={topic} onChange={this.topicChange}>
                        <option value="react">React</option>
                        <option value="angular">angular</option>
                        <option value="vue">vue</option>
                    </select>

                </div>
                <button type="submit" >Submit</button>
            </form>
        )
    }
}

export default Form
