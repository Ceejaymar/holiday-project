import React from 'react';
import {ajax} from "jquery";

// components
import IndividualSkill from './IndividualSkill';

const SkillList = React.createClass({
  getInitialState: function (){
    return {
      list: []
    }
  },
  componentDidMount: function(){
    this.handleRetrieveSkills();
  },
  handleRetrieveSkills: function(){
    var that = this;
    ajax({
      url: '/api/skills',
      type: 'GET'
    })
    .then(function(response){
      // console.log(response)
      that.setState({
        list: response
      })
    })
  },
  render: function(){
    return (
      <div className="mainSkillCont">
        <h1>Skills/tools</h1>
        <div className="skillList">
          {
            this.state.list.map((element, idx)=> {
              return <IndividualSkill list={element} key={idx} />
            })
          }
        </div>
      </div>
    )
  }
})

export default SkillList;
