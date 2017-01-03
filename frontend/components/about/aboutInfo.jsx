import React from 'react';

const AboutInfo = React.createClass({
  render: function(){
    return (
      <div className="aboutSection">
        <div className="imageDiv">
          <img src="https://lh3.googleusercontent.com/S6_BVepXymas6OKxqNZVZ0fAvB-nSrXLmkBY5jiwnCYpkKxYMh9mJcAPJR6C0QxfZCcto8cAHpoCZNk=w3360-h1854-rw" />
        </div>
        <div className="bioDiv">
          <p>My name is carlos martinez. I am a full stack web developer based in brooklyn.</p>
        </div>
      </div>
    )
  }
})

export default AboutInfo
