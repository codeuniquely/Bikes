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
  { value: 'comfort', label: 'Comfort' },
  { value: 'endurance', label: 'Endurance' },
  { value: 'race', label: 'Race' },
  { value: 'all', label: 'All Bikes' }
];

const defaultOption = options[0];

class App extends Component {

  constructor(props) {
    super(props);
    this.selected = [];
    this.onClicked = this.onClicked.bind(this);
    this.onSelected = this.onSelected.bind(this);

    this.state = {
      filter: 'all'
    };
  }

  onClicked(entry) {
    console.log('APP Clicked ', entry); // eslint-disable-line no-console
  }

  onSelected(entry) {
    this.setState({ filter: entry.value });
  }

  render() {
    let items = bikeData.items;
    if ( this.state.filter && this.state.filter !== 'all') {
      items = bikeData.items.filter( item => {
        return item.class.indexOf(this.state.filter) !== -1;
      });
    }

    return (
      <div className="container">
        <h1>Bikes Application</h1>
        <Dropdown options={options} onChange={this.onSelected} value={defaultOption} placeholder="Select an option" />
        <List items={items} onClicked={this.onClicked} />
      </div>
    );
  }
}

export default App;