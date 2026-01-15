import React, { Component } from 'react'

class FormHandling extends Component {

    constructor(props){
        super(props)
        this.state={
            username:"Semon",
            comments:"full-stack developer",
            topic:"Angular"
        }
    }

    usernameChangeHandler= (event)=>{
        this.setState({
            username:event.target.value
        })
    }

    commentsChangeHandler= (event)=>{
        this.setState({
            comments:event.target.value
        })
    }

    topicChangeHandler= (event)=>{
        this.setState({
            topic:event.target.value
        })
    }

    submitHandler= event=>{
        // event.preventDefault(); //prevent the default form refreshing and reset to the initial default values.
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    }

  render() {
    const {username, comments, topic}= this.state;

    return (
      <form onSubmit={this.submitHandler} action="get">
        <div>
            <label>Username: </label>
            <input type="text" name="username" value={username} onChange={this.usernameChangeHandler}/>
        </div>

        <div>
            <label>Comments: </label>
            <textarea value={comments} onChange={this.commentsChangeHandler}></textarea>
        </div>

        <div>
            <label>Topic: </label>
            <select value={topic} onChange={this.topicChangeHandler}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
            </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default FormHandling
