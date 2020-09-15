import React from 'react';

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
  cursor: 'pointer'
};

const closeButtonStyle = {
  right: '0',
  cursor: 'pointer',
  width: '50px',
  backgroundImage: `url(https://banners.adfox.ru/200831/adfox/1422758/525d2205736349b450e27e04efe912e0_close.svg)`,
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
          title="previewFrame"
          style={{
            height: this.props.height,
            background: 'white',
            marginTop: this.props.marginTop,
            borderRadius: '15px',
            padding: this.props.padding
          }}
            src={this.props.url}
            frameBorder="0"
            width={this.props.width}
            height={this.props.height}
          >
        </iframe>
      </div>
    )
  }
}

export default Preview;
