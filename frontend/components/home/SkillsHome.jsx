import React from 'react';

const HomeSkills = React.createClass({
  render: function() {
    return (
      <div id="bodyContent">
        <div className="bodyContainer">
          <p>Skills</p>
          <div className="skills">
            <div className="specSkill">
              <p>HTML</p>
              <div className="skillSet">
                <i className="devicon-html5-plain colored"></i>
                <p className="skillDetails">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam porro aperiam. </p>
              </div>
            </div>
            <div className="specSkill">
              <p>CSS</p>
              <div className="skillSet">
                <i className="devicon-css3-plain colored"></i>
                <p className="skillDetails">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur deserunt adipisci totam earum.</p>
              </div>
            </div>
            <div className="specSkill">
              <p>SASS</p>
              <div className="skillSet">
                <i className="devicon-sass-original colored"></i>
                <p className="skillDetails">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ea, voluptatum eos ut? Corporis similique.</p>
              </div>
            </div>
            <div className="specSkill">
              <p>Javascript</p>
              <div className="skillSet">
                <i className="devicon-javascript-plain colored"></i>
                <p className="skillDetails">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ea, voluptatum eos ut? Corporis similique.</p>
              </div>
            </div>
            <div className="specSkill">
              <p>jQuery</p>
              <div className="skillSet">
                <i className="devicon-jquery-plain colored"></i>
                <p className="skillDetails">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur deserunt adipisci totam earum.</p>
              </div>
            </div>
            <div className="specSkill">
              <p>React</p>
              <div className="skillSet">
                <i className="devicon-react-original colored"></i>
                <p className="skillDetails">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam porro aperiam. </p>
              </div>
            </div>
          </div>  
        </div>
      </div>
    )
  }
})

export default HomeSkills;
