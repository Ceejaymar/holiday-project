import React from 'react';
import {ajax} from "jquery";

const CreateProject = React.createClass({
  getInitialState: function(){
    return {
      title: "",
      image: "",
      github: "",
      description: ""
    }
  },
  handleChange: function(change, e){
    this.setState({
      [change]: e.target.value
    })
  },
  submit: function(e) {
    ajax({
      url: '/api/projects',
      type: 'POST',
      data: this.state
    })
    .then(function(respone){
      console.log(response)
    })
  },
  render: function(){
    return (
      <div className="createProjectCont">
        <h1>Add a project</h1>
        <div className="formCont">
          <form onSubmit={this.submit}>
            <input type="text" placeholder="title" value={this.state.title} onChange={this.handleChange.bind(this, "title")}></input>
            <input type="text" placeholder="image" value={this.state.image} onChange={this.handleChange.bind(this, "image")}></input>
            <input type="text" placeholder="github" value={this.state.github} onChange={this.handleChange.bind(this, "github")}></input>
            <input type="text" placeholder="description" value={this.state.description} onChange={this.handleChange.bind(this, "description")}></input>
            <input className="submitButton" type="submit"></input>
          </form>
        </div>
      </div>
    )
  }
})

export default CreateProject;
