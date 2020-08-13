import React, { useState } from 'react';
import closeButton from './img/close.svg';

const previewStyle = {
  color: '#000000',
  textAlign: 'center',
  display: 'block',
  position: 'fixed',
  zIndex: '1',
  height: '100%',
  width: '100%',
  background: 'rgba(0, 0, 0, 0.82)',
  top: '0px',
  left: '0px',
  opacity: '1',
  cursor: 'pointer',
  zIndex: '1'
};

const closeButtonStyle = {
  right: '0',
  cursor: 'pointer',
  width: '50px',
  backgroundImage: `url(${closeButton})`,
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: '0',
  height: '50px',
  textAlign: 'center',
  zIndex: '2',
  color: '#fff',
  backgroundPosition: '50%'
};

class Preview extends React.Component {

  hideClickHandler = () => {
    this.props.hidePreview();
  };

  render() {
    return (
      <div
        id="preview"
        style={previewStyle}
      >
        <div
          onClick={this.hideClickHandler}
          style={closeButtonStyle}>
        </div>
        <iframe
          style={{
            height: '600px',
            background: 'white',
            marginTop: '60px'
          }}
            src={this.props.url}
            frameBorder="0"
            width={this.props.width}
          >
        </iframe>
      </div>
    )
  }
}

export default Preview;
