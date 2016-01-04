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
