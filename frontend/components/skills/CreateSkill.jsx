import React from 'react';
import {ajax} from 'jquery';

const CreateSkill = React.createClass({
  getInitialState: function() {
    return {
      skill: "",
      icon: ""
    }
  },
  handleChange: function(change, e) {
    this.setState({
      [change]: e.target.value
    })
  },
  submit: function(e) {
    ajax({
      url: '/api/skills',
      type: 'POST',
      data: this.state
    })
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.submit} >
          <input type='text' placeholder="title"  value={this.state.skill} onChange={this.handleChange.bind(this, "skill")}></input>
          <input type='text' placeholder="icon info"  value={this.state.icon} onChange={this.handleChange.bind(this, "icon")}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
})

export default CreateSkill;
