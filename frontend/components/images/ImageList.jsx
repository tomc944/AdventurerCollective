var React = require('react');
var Map = require('../map');
var Carousel = require('nuka-carousel');

var ImageList = React.createClass({
  mixins: [Carousel.ControllerMixin],

  render: function() {
    return(
      <Carousel slidesToShow={1} dragging={false} slideHeight="600px" slideWidth="800px">

        <Map adventures={this.props.adventures}></Map>
        {this.props.images.map(function (image) {
          var imageUrl = "http://res.cloudinary.com/dpdxfgx58/image/upload/" + image.url
          return (<img key={image.id} src={imageUrl}/>)
        })}

      </Carousel>
    );
  }
});

module.exports = ImageList;
