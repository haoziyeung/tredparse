import React from 'react';
import { Button } from 'react-bootstrap';

const Introduction = React.createClass({
  render() {
    const containerStyle = {
      fontFamily: '"Lato", sans-serif',
      padding: '0 0 10px 0',
      overflow: 'hidden',
    };

    const introductionHeaderStyle = {
      fontSize: '24px',
      lineHeight: '30px',
      fontWeight: '300',
      margin: '0 0 10px 0',
      textTransform: 'uppercase',
    };

    const buttonStyle = {
      fontWeight: '300',
      textTransform: 'uppercase',
      marginBottom: '10px',
    };

    return (
      <div className="container-fluid text-center">
        <div className="row">
          <div style={containerStyle}>

            <div className="col-sm-12">
              <h2 style={introductionHeaderStyle}>
                <strong> Short tandem repeats </strong> are a common source of
                genetic diseases that can be assayed through genome sequencing
              </h2>
              <Button bsStyle="success" bsSize="large" style={buttonStyle} href="https://github.com/humanlongevity/tredparse">
                  <i className="fa fa-github"></i> Find out how
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = Introduction;
