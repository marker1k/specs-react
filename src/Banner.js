import React, { useState } from 'react';
import Preview from './Preview';
import external_link from './img/external_link.svg';
import preview_desktop_icon from './img/preview_desktop_icon.svg';
import preview_mobile_icon from './img/preview_mobile_icon.svg';

const headingStyle = {
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '36px',
  lineHeight: '42px',
  alignItems: 'center',
  fontFeatureSettings: '"pnum" on, "lnum" on',
  color: '#000000'
};

const linkStyle = {
  fontFamily: 'YS Text',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '18px',
  lineHeight: '30px',
  letterSpacing: '0.15px',
  textDecorationLine: 'none',
  fontFeatureSettings: '"pnum" on, "lnum" on',
  color: '#000000'
};

const externalLinkIcon = {
  backgroundImage: `url(${external_link})`,
  width: '19px',
  height: '19px',
  display: 'inline-block',
  marginLeft: '8px',
};

const previewStyle = {
  width: '340px',
  height: '70px',
  background: '#F6F6F6',
  border: '1px solid #D3D3D3',
  boxSizing: 'border-box',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  marginTop: '10px'
};

const previewDesktopIcon = {
  backgroundImage: `url(${preview_desktop_icon})`,
  width: '45px',
  height: '41.94px',
  margin: '10px'
};

const previewMobileIcon = {
  backgroundImage: `url(${preview_mobile_icon})`,
  width: '34px',
  height: '45px',
  margin: '10px',
  backgroundRepeat: 'no-repeat',
  marginLeft: '20px',
  marginRight: '20px',
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

  generateUrl = function() {
    switch (this.props.bannerData.name) {
      case 'Banner Image':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-image';
      break;

      case 'Banner HTML5':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-html5';
      break;

      case 'Screenglide HTML5':
        return 'https://yandex.ru/promo/yan/adfox-specs/screenglide-html5';
      break;

      case 'Screenglide HTML5 с видео':
        return 'https://yandex.ru/promo/yan/adfox-specs/screenglide-html5';
      break;

      case 'Banner Interscroller HTML5':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-interscroller';
      break;

      case 'BannerLine HTML5':
        return 'https://yandex.ru/promo/yan/adfox-specs/screenglide-html5';
      break;

      case 'Banner Slider':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-slider';
      break;

      case 'Fullscreen HTML5':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-fullscreen';
      break;

      case 'Fullscreen HTML5 с видео':
        return 'https://yandex.ru/promo/yan/adfox-specs/screenglide-html5';
      break;

      case 'Banner Video':
        return 'https://yandex.ru/promo/yan/adfox-specs/screenglide-html5';
      break;

      case 'Video VPAID VAST 3.0 Viewability':
        return 'https://yandex.ru/promo/yan/adfox-specs/screenglide-html5';
      break;

      case 'InPage video':
        return 'https://yandex.ru/promo/yan/adfox-specs/screenglide-html5';
      break;

      case 'Background HTML5':
        return 'https://yandex.ru/promo/yan/adfox-specs/screenglide-html5';
      break;

      case 'Background HTML5':
        return 'https://yandex.ru/promo/yan/adfox-specs/screenglide-html5';
      break;

      default:
        return 'https://ya.ru/';
    }
  };

  generateHelpUrl = function() {
    switch (this.props.bannerData.name) {
      case 'Banner Image':
        return 'https://yandex.ru/support/adfox-specs/banner-image.html';
      break;

      case 'Banner HTML5':
        return 'https://yandex.ru/support/adfox-specs/banner-html5.html';
      break;

      case 'Screenglide HTML5':
        return 'https://yandex.ru/support/adfox-specs/screenglide-html5.html';
      break;

      case 'Screenglide HTML5 с видео':
        return 'https://yandex.ru/support/adfox-specs/screenglide-html5-with-video.html';
      break;

      case 'Banner Interscroller HTML5':
        return 'https://yandex.ru/support/adfox-specs/interscroller.html';
      break;

      case 'BannerLine HTML5':
        return 'https://yandex.ru/support/adfox-specs/bannerline-html5.html';
      break;

      case 'Banner Slider':
        return 'https://yandex.ru/support/adfox-specs/banner-slider.html';
      break;

      case 'Fullscreen HTML5':
        return 'https://yandex.ru/support/adfox-specs/fullscreen-html5.html';
      break;

      case 'Fullscreen HTML5 с видео':
        return 'https://yandex.ru/support/adfox-specs/fullscreen-html5-with-video.html';
      break;

      case 'Banner Video':
        return 'https://yandex.ru/support/adfox-specs/banner-video.html';
      break;

      case 'Video VPAID VAST 3.0 Viewability':
        return 'https://yandex.ru/support/adfox-specs/video-vpaid.html';
      break;

      case 'InPage video':
        return 'https://yandex.ru/support/adfox-specs/inpage.html';
      break;

      case 'Background HTML5':
        return 'https://yandex.ru/support/adfox-specs/background-html5.html';
      break;

      case 'Header Bidding':
        return 'https://yandex.ru/promo/yan/adfox-specs/screenglide-html5';
      break;

      default:
        return 'https://ya.ru/';
    }
  };

  render() {
    return (
      <div
        id='inner'
        style={{
          overflow: 'auto'
      }}>
      <div
      style={{
        backgroundImage: this.props.bannerData.image,
        width: '360px',
        height: '275px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        float: 'left',
        marginRight: '65px',
        marginTop: '30px'
      }}></div>
      <h1 style={headingStyle} id="innerHeading">{this.props.bannerData.name}</h1>
      <p>
        {this.props.bannerData.description}<br /><br />
        Подробнее про настройку читайте в <a style={linkStyle} href={this.generateHelpUrl()} target="_blank">документации <div style={externalLinkIcon}></div></a>
      </p>
      <div style={{overflow: 'auto'}}>
        <div style={previewStyle} onClick={this.showDesktopPreview}>
        <div style={previewDesktopIcon}></div>
          Пример отображения на десктопе
        </div>
        <div style={previewStyle} onClick={this.showMobilePreview}>
        <div style={previewMobileIcon}></div>
          Пример отображения на мобильном устройстве
        </div>
        <div style={{marginTop: '31px'}}><a style={linkStyle} href={this.generateUrl()} target="_blank">Открыть пример в новом окне <div style={externalLinkIcon}></div></a></div>
      </div>
      {this.state.isPreviewVisible == true &&
        <Preview hidePreview={this.hidePreview}
        url={this.generateUrl()}
        width={this.state.mobile ? '350px' : '1000px'}
      />}
      </div>
    )
  }
}

export default Banner;
