import { default as React, PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars

// styling for pills
import 'style/pills.scss';

class Image extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    gridClass: PropTypes.string,
    imgClass: PropTypes.string
  };

  // static get defaultProps() {
  //   return {
  //     gridClass: 'px2 py2',
  //     imgClass: 'image'
  //   };
  // }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handlePillClick = this.handlePillClick.bind(this);

    // load the initial state
    this.state = {
      // imgGrid: this.props.gridClass,
      // imgClass: this.props.imgClass,
      data: this.props.data
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.state.data) {
      this.setState({ data: nextProps.data });
    }
  }

  handleClick() {
    this.props.handleClick(this.state.data);
  }

  handlePillClick() {
    let pill = this.refs.pill.textContent;
    this.props.handlePillClick(pill);
  }

  handleClasses(classes) {
    let items;
    if (classes && classes.length > 0) {
      let list = classes.map( (item,i) => {
        return <li key={i} ref="pill" className="pill" onClick={this.handlePillClick}>{item}</li> ;
      });
      items = (
        <ul>
          {list}
        </ul>
      );
    }
    return items;
  }

  // there are two url's avaiable 'thumb' and 'large'
  render() {
    let item = this.state.data;
    let image = item.image;
    let classes = this.handleClasses(item.class);

    return (
      <div className="listitem" onClick={this.handleClick}>
        <div className="name">
          {item.name}
        </div>
        <div className="image">
          <img src={image.thumb}/>
        </div>
        <p className="description">
          {item.description}
        </p>
        <div className="classes">
          {classes}
        </div>
      </div>
    );
  }
}

export default Image;
