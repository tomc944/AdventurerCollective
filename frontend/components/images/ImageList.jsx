var React = require('react');

var ImageList = React.createClass({
  render: function() {
    return(
      <ul>
        {this.props.images.map(function (image) {
          return (
            <li className="image" key={image.id}>
              <img key={image.id} src={image.url}/>
            </li>
          );
        })}
      </ul>
    );
  }
});

module.exports = ImageList;
