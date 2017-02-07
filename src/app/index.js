// import { default as React, PropTypes, Component } from 'react';
import { default as React, Component } from 'react'; // eslint-disable-line no-unused-vars
import List from 'src/components/list/list.js'; // eslint-disable-line no-unused-vars

// Import the applications styling
import 'style/app.scss';

import bikeData from 'assets/bikes';

class App extends Component {

  constructor(props) {
    super(props);
    this.selected = [];

    this.onClicked = this.onClicked.bind(this);
  }

  onClicked(evt, entry) {
    console.log('clicked ', entry); // eslint-disable-line no-console
  }

  render() {

    console.log('Bike Data is ', bikeData); // eslint-disable-line no-console

    return (
      <div className="container">
        <h1>Bikes Application</h1>
        <List items={bikeData.items} onClicked={this.onClicked} />
      </div>
    );
  }
}

export default App;