import { default as React, PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars
import Item from './listitem'; // eslint-disable-line no-unused-vars

import 'style/list.scss';

class List extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handlePillClick = this.handlePillClick.bind(this);
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

  handlePillClick(entry) {
    if(this.props.onPillClicked) {
      this.props.onPillClicked(entry);
    }
  }

  render() {
    let onClick = this.handleClick;
    let onPillClick = this.handlePillClick;

    let listItems = [];
    this.state.items.forEach( item => {
      let record = <Item key={item.id} data={item} handleClick={onClick} handlePillClick={onPillClick} /> ;
      listItems.push(record);
    });
    return (
      <div className="list">
        {listItems}
      </div>
    );
  }
}

export default List;
