import { default as React, PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars

class Image extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    gridClass: PropTypes.string,
    imgClass: PropTypes.string
  };

  static get defaultProps() {
    return {
      gridClass: 'col col-4 px2 py2',
      imgClass: 'image'
    };
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    // load the initial state
    this.state = {
      imgGrid: this.props.gridClass,  // || this.props.defautImgGrid,
      imgClass: this.props.imgClass,  // || this.props.defautImgClass,
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

  render() {
    let item = this.state.data;
    let image = item.image;

    return (
      <div className={this.state.imgGrid} onClick={this.handleClick}>
        <img className={this.state.imgClass} src={image.thumb}/>
        <div>
          {item.description}
        </div>
        <div>
          {item.name}
        </div>
        <div>
          {item.class}
        </div>
      </div>
    );
  }
}

export default Image;
