import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

// styles
import './main.css';

// components
import Navbar from "./components/Navbar";
// import HeroArea from "./components/HeroArea";
import HomeBody from "./components/home/HomeBody";
import Projects from "./components/projects/Projects";
import About from "./components/AboutMe";
import CreateProject from './components/projects/CreateProject';
import Contact from './components/Contact';
import Footer from "./components/Footer";

const App = React.createClass({
  render: function(){
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeBody} />
      <Route path="projects" component={Projects} />
      <Route path="about me" component={About} />
      <Route path="createproject" component={CreateProject} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('root')
)
