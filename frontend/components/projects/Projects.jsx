import React from 'react';
import {ajax} from "jquery";

// components
import IndividualProject from './IndividualProject';

const Projects = React.createClass({
  getInitialState: function (){
    return {
      projectsList: []
    }
  },
  componentDidMount: function(){
    this.handleRetrieveProjects();
  },
  handleRetrieveProjects: function(){
    var that = this;
    ajax({
      url: '/api/projects',
      type: 'GET'
    })
    .then(function(response){
      // console.log(response)
      that.setState({
        projectsList: response
      })
    })
  },
  render: function(){
    return (
      <div className="mainContainer">
        <h1>Projects</h1>
        <div className="projectContainer">
          {
            this.state.projectsList.map((element, idx)=> {
              return <IndividualProject projectsList={element} key={idx} />
            })
          }
        </div>
      </div>
    )
  }
})

export default Projects;
