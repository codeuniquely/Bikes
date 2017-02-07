import { default as React, PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars
import Item from './listitem'; // eslint-disable-line no-unused-vars

class List extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // load the initial state
    this.state = {
      items: props.items ? props.items : []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.items !== this.state.items) {
      this.setState({ items: nextProps.items });
    }
  }

  handleClick(entry) {
    if(this.props.onClicked) {
      this.props.onClicked(entry);
    }
  }

  render() {
    let onClick = this.handleClick;
    let listItems = [];
    this.state.items.forEach( item => {
      let record = <Item key={item.id} data={item} handleClick={onClick} /> ;
      listItems.push(record);
    });
    return (
      <div className={this.state.wrapperClass}>
        {listItems}
      </div>
    );
  }
}

export default List;
