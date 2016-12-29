import React from 'react';
import {Link} from 'react-router';

const IndividualProject = React.createClass({
  render: function(){
    return (
      <div>
        {console.log(this.props.projectsList.image)}
        <h1>{this.props.projectsList.title}</h1>
        <img src={this.props.projectsList.image} />
        <Link to={this.props.projectsList.github}>Github</Link>
        <p>{this.props.projectsList.description}</p>
      </div>
    )
  }
})

export default IndividualProject;
