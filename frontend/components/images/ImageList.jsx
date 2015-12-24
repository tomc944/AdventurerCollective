var React = require('react');
var Carousel = require('nuka-carousel');

var ImageList = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render: function() {
    return(
      <ul>
        <Carousel>
          {this.props.images.map(function (image) {
            return (
              <img key={image.id} src={image.url}/>    
            );
          })}
        </Carousel>
      </ul>
    );
  }
});

module.exports = ImageList;
