import React from 'react';

const Contact = React.createClass({
  render: function(){
    return (
      <div className="contactPage">
        <h1>Contact me</h1>
        <form>
          <label></label>
          <input type="text" placeholder="name" ></input>
          <label></label>
          <input type="text" placeholder="email" ></input>
          <label></label>
          <input type="text" placeholder="message" ></input>
          <label></label>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
})

export default Contact;
