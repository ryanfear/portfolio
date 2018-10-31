import React, { Component } from 'react';

import { CenteredHeader } from './App.js'

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Hi! I'm Ryan. I'm a software developer based in Denver, CO.</CenteredHeader>
        <p>
          Front end leaning & believer in strong user experience full stack developer.
        </p>
        <p>
          ​Beyond tech, I enjoy climbing and being a puppy daddy.
        </p>
        <p>
          Previously, I've <a href="https://www.freecodecamp.org/" target="_blank">learned to code</a>,
          served thousands of people <a href="http://www.oddfellowsdallas.com/" target="_blank">specialty coffee</a>,
          and climbed in a 24 hour climbing <a href="https://www.twofourhell.com/" target="_blank">festival </a>
          in Arkansas for 6 years.
          I also hold a degree in <a href="https://xkcd.com/977/" target="_blank">geography</a>,
          from the University of North Texas.
        </p>
      </div>
    );
  }
}

export default Home;
