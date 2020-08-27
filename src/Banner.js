import React, { useState } from 'react';
import './banner.css';
import Preview from './Preview';
import external_link from './img/external_link.svg';
import preview_desktop_icon from './img/preview_desktop_icon.svg';
import preview_mobile_icon from './img/preview_mobile_icon.svg';

const desktopOnly = ['Screenglide HTML5 с видео', 'Banner Video', 'Background HTML5', 'Video VPAID VAST 3.0 Viewability'];

const externalLinkIcon = {
  backgroundImage: `url(${external_link})`,
  width: '19px',
  height: '19px',
  display: 'inline-block',
  marginLeft: '8px',
};

const previewDesktopIcon = {
  backgroundImage: `url(${preview_desktop_icon})`,
  width: '45px',
  height: '41.94px',
  marginLeft: '29px',
  marginRight: '28px',
  backgroundRepeat: 'no-repeat'
};

const previewMobileIcon = {
  backgroundImage: `url(${preview_mobile_icon})`,
  width: '28px',
  height: '45px',
  marginLeft: '39px',
  backgroundRepeat: 'no-repeat',
  marginLeft: '39px',
  marginRight: '38.8px',
};

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.hidePreview = this.hidePreview.bind(this);
    this.state = {
      isPreviewVisible: false,
      mobile: false
    };
  }

  showDesktopPreview = () => {
    this.setState({
      isPreviewVisible: true,
      mobile: false
    });
  };

  showMobilePreview = () => {
    this.setState({
      isPreviewVisible: true,
      mobile: true
    });
  };

  hidePreview = function() {
    this.setState({
      isPreviewVisible: false,
      mobile: false
    });
  }



  render() {
    return (
      <div
        id='inner'
        style={{
          overflow: 'auto'
      }}>
      <div className="bannerPreviewImage" style={{backgroundImage: this.props.bannerData.image}}></div>
      <h1 className="innerHeading" id="innerHeading">{this.props.bannerData.name}</h1>
      <div className="bannerDescription">
        {this.props.bannerData.description}<br /><br />
        <div className="documentationLink description">
          <span>Подробнее про его настройку читайте в&nbsp;</span>
          <a className="link innerLink" href={this.props.bannerData.documentationUrl} target="_blank">документации</a>
          <div style={externalLinkIcon}></div>
        </div>
      </div>
      <div style={{overflow: 'auto'}}>
        <div className="previewButton" style={{marginTop: '23px'}} onClick={this.showDesktopPreview}>
          <div className="documentationLink">
            <div className="previewDesktopIcon" style={previewDesktopIcon}></div>Пример отображения на десктопе
          </div>
        </div>
        {desktopOnly.indexOf(this.props.bannerData.name) == -1 &&
          <div className="previewButton" onClick={this.showMobilePreview}>
            <div className="documentationLink">
              <div className="previewMobileIcon" style={previewMobileIcon}></div>Пример отображения на мобильном устройстве
            </div>
          </div>
        }
        <div className="documentationLink" style={{marginTop: '31px'}}>
          <a className="link innerLink" href={this.props.bannerData.exampleUrl} target="_blank">Открыть пример в новом окне</a>
          <div style={externalLinkIcon}></div>
        </div>
      </div>
      {this.state.isPreviewVisible == true &&
        <Preview hidePreview={this.hidePreview}
        url={this.props.bannerData.exampleUrl}
        width={this.state.mobile ? '350px' : '1000px'}
      />}
      </div>
    )
  }
}

export default Banner;
