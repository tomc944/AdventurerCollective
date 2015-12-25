var React = require('react');
var Slider = require('react-slick');

var ImageList = React.createClass({
  render: function() {
    var settings = {
      dots: true,
      infinite: true,
      fade: true,
      speed: 5000,
      variableWidth: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return(
      <Slider {...settings}>
        {this.props.images.map(function (image) {
          return (
            <img key={image.id} src={image.url}/>
          );
        })}
      </Slider>
    );
  }
});

module.exports = ImageList;
