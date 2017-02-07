import { default as React, PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars

class Image extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    gridClass: PropTypes.string,
    imgClass: PropTypes.string
  };

  static get defaultProps() {
    return {
      gridClass: 'col col-6 sm-col-12 px2 py2',
      imgClass: 'image'
    };
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    // load the initial state
    this.state = {
      imgGrid: this.props.gridClass,
      imgClass: this.props.imgClass,
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

  handleClasses(classes) {
    let items;
    if (classes && classes.length > 0) {
      let list = classes.map( (item,i) => {
        return <li key={i} className="class">{item}</li> ;
      });
      items = (
        <ul>
          {list}
        </ul>
      );
    }
    return items;
  }

  render() {
    let item = this.state.data;
    let image = item.image;
    let classes = this.handleClasses(item.class);

    // there are two url's avaiable 'thumb' and 'large'

    return (
      <div className={this.state.imgGrid} onClick={this.handleClick}>
        <div className={this.state.imgClass}>
          <img src={image.large}/>
        </div>
        <div className="description">
          {item.description}
        </div>
        <div className="name">
          {item.name}
        </div>
        <div className="classes">
          {classes}
        </div>
      </div>
    );
  }
}

export default Image;
