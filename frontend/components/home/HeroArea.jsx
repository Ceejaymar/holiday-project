import React from 'react';

const HeroArea = React.createClass({
  render: function(){
    return (
      <section className="heroArea">
        <div className="heroAbout">
          <p className="heroSal">Hi, I'm Carlos</p>
          <p className="heroHeader">fullstack web developer</p>
          {/* <!-- UI enthusiast --> */}
          <p className="heroHeader">based in Brooklyn</p>

        </div>
      </section>
    )
  }
})

export default HeroArea;
