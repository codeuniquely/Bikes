// import { default as React, PropTypes, Component } from 'react';
import { default as React, Component } from 'react'; // eslint-disable-line no-unused-vars

// third party components
import Dropdown from 'react-dropdown'; // eslint-disable-line no-unused-vars

// App components
import List from 'src/components/list/list.js'; // eslint-disable-line no-unused-vars
import Selection from 'src/components/selection';    // eslint-disable-line no-unused-vars

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
      filter: 'all',
      selected: undefined
    };
  }

  onClicked(entry) {
    this.persistEntry(entry);
  }

  onSelected(entry) {
    this.setState({ filter: entry.value });
  }

  // persit the bike to 'state' allowing for refresh ..
  persistEntry(entry){
    // let selected = this.state.selected;
    // selected.push(entry);
    this.setState({ selected: entry });
  }

  // filter the data based on the drop down list
  filterData() {
    let items = bikeData.items;
    if ( this.state.filter && this.state.filter !== 'all') {
      items = bikeData.items.filter( item => {
        return item.class.indexOf(this.state.filter) !== -1;
      });
    }
    return items;
  }

  // Build the selected 'bike' information based on choice
  // makeSelection() {
  //   let selected;
  //   if (this.state.selected){
  //     selected = this.state.selected.name;
  //   } else {
  //     selected = 'no current selection';
  //   }
  //   return (
  //     <div className="selection">
  //       <h2>Selected Bike:</h2>
  //       <h3>{selected}</h3>
  //     </div>
  //   );
  // }

  render() {
    let items = this.filterData();
    let selection = (
      <Selection bike={this.state.selected} />
    );

    return (
      <div className="container">
        <h1>Bikes Application</h1>
        <div className="col col-4">
          <label htmlFor="type">Filter bikes</label>
          <Dropdown name="type" options={options} onChange={this.onSelected} value={defaultOption} placeholder="Select a type" />
          <List items={items} onClicked={this.onClicked} />
        </div>
        <div className="col col-8">
          {selection}
        </div>
      </div>
    );
  }
}

export default App;