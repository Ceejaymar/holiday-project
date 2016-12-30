import React from 'react';
import {Link} from 'react-router';

const HomeContact = React.createClass({
  render: function(){
    return (
      <section className="contactSection">
        <h1 className="getit">Get in touch</h1>
        <Link to="contact"><button>Contact me</button></Link>
        <div className="socialIcons">
          <a href="https://www.instagram.com/steadyonthego/" target="_blank"><i className="fa fa-instagram"></i></a>
          <a href="https://github.com/Ceejaymar" target="_blank"><i className="fa fa-github"></i></a>
          <a href="https://www.linkedin.com/in/carmart" target="_blank"><i className="fa fa-linkedin"></i></a>
          <a href="https://twitter.com/steadyonthego" target="_blank"><i className="fa fa-twitter"></i></a>
        </div>
      </section>
    )
  }
})

export default HomeContact;
