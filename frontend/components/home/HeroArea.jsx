import React from 'react';

const HeroArea = React.createClass({
  render: function(){
    return (
      <section className="heroArea">
        <div className="heroAbout">
          <p className="heroSal">Hi, I'm Carlos</p>
          <p className="heroHeader">Fullstack Web Developer</p>
          {/* <!-- UI enthusiast --> */}
          <p className="heroHeader">Based in Brooklyn</p>

        </div>
      </section>
    )
  }
})

export default HeroArea;
