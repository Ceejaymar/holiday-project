import React from 'react';

// components
import AboutInfo from './aboutInfo';
import SkillList from '../skills/SkillList';

const About = React.createClass({
  render: function(){
    return (
      <div>
        <AboutInfo />
        <SkillList />
      </div>
    )
  }
})

export default About;
