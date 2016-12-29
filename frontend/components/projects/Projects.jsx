import React from 'react';
import {ajax} from "jquery";

// components
import IndividualProject from './IndividualProject.jsx';

const Projects = React.createClass({
  getInitialState: function (){
    return {
      projectsList: []
    }
  },
  componentDidMount: function(){
    this.handleRetrieveProjects();
  },
  handleRetrieveProjects: function (){
    var that = this;
    ajax({
      url: '/api/projects',
      type: 'GET'
    }).then(function(response){
      // console.log(response)
      that.setState({
        projectsList: response
      })
    })
  },
  render: function(){
    return (
      <div>
        {console.log(this.state.projectsList)}
        {
          this.state.projectsList.map((element, idx)=> {
            return <IndividualProject projectsList={element} key={idx} />
          })
        }
      </div>
    )
  }
})

export default Projects;
