import React from 'react';
import {Link} from 'react-router';

const Footer = React.createClass({
  render: function() {
    return (
      <footer>
        <div className="footer">
          <small>© Carlos Martinez</small>
        </div>
        <div className="addLink">
          <Link to="/createskill">Add skill</Link>
          <Link to="/createproject">Add project</Link>
        </div>
      </footer>
    )
  }
})

export default Footer;
