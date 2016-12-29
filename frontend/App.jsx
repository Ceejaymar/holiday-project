import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

// styles
import './main.css';

// components
import Navbar from "./components/Navbar";
import HeroArea from "./components/HeroArea";
import Projects from "./components/projects/Projects";
import About from "./components/AboutMe";
import CreateProject from './components/projects/CreateProject';
import Footer from "./components/Footer";

const App = React.createClass({
  render: function(){
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HeroArea} />
      <Route path="projects" component={Projects} />
      <Route path="about me" component={About} />
      <Route path="createproject" component={CreateProject} />
    </Route>
  </Router>,
  document.getElementById('root')
)
