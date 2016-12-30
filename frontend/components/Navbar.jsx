import React from 'react';
import {Link} from 'react-router';

const Navbar = React.createClass({
  render: function(){
    var links = ["projects", "about me", "contact"];
    links = links.map(function(element, idx){
      return (
        <li key={idx}><Link to={"/" + element} key={idx}>{element}</Link></li>
      )
    })
    return (
      <div>
        <nav>
          <div className="brand"><Link to='/'><p>Carlos Martinez</p></Link></div>
          <div className="navLinks">
            <ul>
              {/* <li><Link to="/">home</Link></li> */}
              {links}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
})

export default Navbar;
