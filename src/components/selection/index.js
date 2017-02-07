import { default as React, PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars

import 'style/selection.scss';

class Selection extends Component {

  static propTypes = {
    bike: PropTypes.object,
  };

  render() {
    let {
      bike
    } = this.props;

    if (bike) {
      return (
        <div className="selection">
          <h2>Your selected bike</h2>
          <h3>{bike.name}</h3>
          <h4>{bike.description}</h4>
          <div className="image">
            <img src={bike.image.large}/>
          </div>
        </div>
      );
    } else {
      return(
        <div className="selection"></div>
      );
    }
  }
}

export default Selection;
