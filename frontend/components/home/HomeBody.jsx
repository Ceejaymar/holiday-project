import React from 'react';

// components
import HeroArea from './HeroArea';
import HomeSkills from './SkillsHome'
import HomeContact from './HomeContact';


const HomeBody = React.createClass({
  render: function(){
    return (
      <div>
        <HeroArea />
        <HomeSkills />
        <HomeContact />
      </div>
    )
  }
})

export default HomeBody;
