// import { default as React, PropTypes, Component } from 'react';
import { default as React, Component } from 'react'; // eslint-disable-line no-unused-vars

// Import the applications styling
import 'style/app.scss';

import bikeData from 'assets/bikes';

class App extends Component {

  static get defaultProps() {
    return {
      data: bikeData
    };
  }

  constructor(props) {
    super(props);
    this.data = bikeData;

    // will need to use state when wired up
    this.selected = [];
  }

  render() {
    return (
      <div className="container">
        <h1>Bikes Application</h1>
      </div>
    );
  }
}

export default App;