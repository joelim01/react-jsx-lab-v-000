import React from 'react';
import FillerText from './FillerText';

class Webpage extends React.Component {
  render() {
    return(
      <div>
        <h1>The World's coolest webpage</h1>
        <FillerText />
        <FillerText />
      </div>
    );
  }
}

export default Webpage