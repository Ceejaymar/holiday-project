import React from 'react';
import {ajax} from 'jquery';

// components
import IndividualSkill from './IndividualSkill';

const Skills = React.createClass({
  getIntitialState: function (){
    return {
      list: []
    }
  },
  componentDidMount: function(){
    this.handleRetrieveSkills();
  },
  handleRetrieveSkills: function(){
    var that = this
    ajax({
      url: '/api/skills',
      type: 'GET'
    }).then(function(response){
      console.log(response)
      that.setState({
        list: response
      })
    })
  },
  render: function() {
    return (
      <div>
        {
          this.state.list.map((element, idx) => {
            return <IndividualSkill list={element} key={idx} />
          })
        }
      </div>
    )
  }
})

export default Skills;
