// import { default as React, PropTypes, Component } from 'react';
import { default as React, Component } from 'react'; // eslint-disable-line no-unused-vars

// third party components
import Dropdown from 'react-dropdown'; // eslint-disable-line no-unused-vars

// App components
import List from 'src/components/list/list.js'; // eslint-disable-line no-unused-vars

// Import the applications styling
import 'style/app.scss';
import 'style/dropdown.scss';

import bikeData from 'assets/bikes';

const options = [
  { value: 'comfort', label: 'comfort' },
  { value: 'endurance', label: 'endurance' },
  { value: 'race', label: 'race' }
];

const defaultOption = options[0];

class App extends Component {

  constructor(props) {
    super(props);
    this.selected = [];

    this.onClicked = this.onClicked.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onClicked(entry) {
    console.log('APP Clicked ', entry); // eslint-disable-line no-console
  }

  onSelect(entry) {
    console.log('APP Clicked ', entry); // eslint-disable-line no-console
  }

  render() {

    console.log('Bike Data is ', bikeData); // eslint-disable-line no-console

    return (
      <div className="container">
        <h1>Bikes Application</h1>
        <Dropdown options={options} onChange={this.onSelect} value={defaultOption} placeholder="Select an option" />
        <List items={bikeData.items} onClicked={this.onClicked} />
      </div>
    );
  }
}

export default App;