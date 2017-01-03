import React from 'react';
import {Link} from 'react-router';

const IndividualProject = React.createClass({
  render: function(){
    return (
      <div className="singleProject">
        <h1 className="singleHeader">{this.props.projectsList.title}</h1>
        <img src={this.props.projectsList.image} />
        <div className="projectInfo">
          <a href={this.props.projectsList.github} target="_blank">Github</a>
          <p>more info</p>
        </div>
        <p>{this.props.projectsList.description}</p>
      </div>
    )
  }
})

export default IndividualProject;
