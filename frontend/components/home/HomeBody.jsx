import React from 'react';

// components
import HeroArea from './HeroArea';
import HomeContact from './HomeContact';

const HomeBody = React.createClass({
  render: function(){
    return (
      <div>
        <HeroArea />
        <HomeContact />
      </div>
    )
  }
})

export default HomeBody;
