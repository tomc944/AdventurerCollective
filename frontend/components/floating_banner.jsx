var React = require('react')

var FloatingBanner = React.createClass({
  render: function() {
    return (
      <div className="index-features">
        <div className="index-features-visible">
          <p className="index-features-perm-text">
            With AdventurerCollective you can
          </p>
          <ul className="index-features-list">
            <li className="index-features-list-item">find new adventures</li>
            <li className="index-features-list-item">create adventures</li>
            <li className="index-features-list-item">track your adventures and mark them completed</li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = FloatingBanner;
