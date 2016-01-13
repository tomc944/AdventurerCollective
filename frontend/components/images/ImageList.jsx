var React = require('react');
var Slider = require('react-slick');

var ImageList = React.createClass({
  render: function() {
    var settings = {
      dots: true,
      infinite: false,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      draggable: false,
      arrows: true
    };

    return(
      <Slider {...settings}>
        {this.props.images.map(function (image) {
          var imageUrl = "http://res.cloudinary.com/dpdxfgx58/image/upload/" + image.url
          return (
            <img key={image.id} src={imageUrl}/>
          );
        })}
      </Slider>
    );
  }
});

module.exports = ImageList;
