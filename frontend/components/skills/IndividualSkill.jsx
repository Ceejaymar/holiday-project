import React from 'react';

const IndividualSkill = React.createClass({
  render: function(){
    return (
      <div>
        {/* <h1>{this.props.list.skill}</h1> */}
          <i className={this.props.list.icon}></i>
      </div>
    )
  }
})

export default IndividualSkill;
