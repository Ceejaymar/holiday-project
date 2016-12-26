import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

// components
import HeroArea from "./components/HeroArea";

const App = React.createClass({
  render: function(){
    return (
      <div>
        This is the app page
      </div>
    )
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HeroArea} />
    </Route>
  </Router>,
  document.getElementById('root')
)
