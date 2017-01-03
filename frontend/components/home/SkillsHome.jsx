import React from 'react';
import {Link} from 'react-router';

const HomeSkills = React.createClass({
  render: function() {
    return (
      <div id="bodyContent">
        <div className="bodyContainer">
          <p>My skills</p>
          <div className="skills">
            <div className="specSkill">
              <div className="skillSet">
                <i className="devicon-html5-plain-wordmark colored"></i>
              </div>
            </div>
            <div className="specSkill">
              <div className="skillSet">
                <i className="devicon-css3-plain-wordmark colored"></i>
              </div>
            </div>
            <div className="specSkill">
              <div className="skillSet">
                <i className="devicon-sass-original colored"></i>
              </div>
            </div>
            <div className="specSkill">
              <div className="skillSet">
                <i className="devicon-javascript-plain colored"></i>
              </div>
            </div>
            <div className="specSkill">
              <div className="skillSet">
                <i className="devicon-jquery-plain-wordmark colored"></i>
              </div>
            </div>
            <div className="specSkill">
              <div className="skillSet">
                <i className="devicon-react-original-wordmark colored"></i>
              </div>
            </div>
          </div>
          <div className="viewMore">
          <Link to="/about"><p>View more</p></Link>
          </div>
        </div>
      </div>
    )
  }
})

export default HomeSkills;
