import React from 'react';

const Footer = React.createClass({
  render: () => {
    const containerStyle = {
      fontFamily: '"Lato", sans-serif',
      padding: '40px 0',
      borderTop: '1px solid #ddd',
      overflow: 'hidden',
      color: '#ccc',
    };

    const footerContentStyle = {
      fontSize: '16px',
      fontWeight: '200',
      margin: 0,
    };

    return (
      <div className="container-fluid text-center">
        <div className="row">
          <div style={containerStyle} data-style-footer>
            <div className="col-sm-12">
              <p style={footerContentStyle}>
                Built by <a href="http://github.com/tanghaibao">Haibao Tang</a> in 2016
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = Footer;
