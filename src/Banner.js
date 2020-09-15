import React from 'react';
import './banner.css';
import Preview from './Preview';

const desktopOnly = ['Screenglide HTML5 с видео', 'Banner Video', 'Background HTML5', 'Video VPAID VAST 3.0 Viewability'];

const externalLinkIcon = {
  backgroundImage: `url(https://banners.adfox.ru/200831/adfox/1422758/040e1b7f4416dd99808174abe88c74c8_external_link.svg)`,
  width: '19px',
  height: '19px',
  display: 'inline-block',
  marginLeft: '8px',
  position: 'relative',
  top: '4px'
};

const previewDesktopIcon = {
  backgroundImage: `url(https://banners.adfox.ru/200831/adfox/1422758/71c0ed7516944b0ac4ec4306cf9d008f_preview_desktop_icon.svg)`,
  width: '45px',
  height: '41.94px',
  marginLeft: '29px',
  marginRight: '28px',
  backgroundRepeat: 'no-repeat'
};

const previewMobileIcon = {
  backgroundImage: `url(https://banners.adfox.ru/200831/adfox/1422758/72d48a1c0741a37f49e23e0956176905_preview_mobile_icon.svg)`,
  width: '28px',
  height: '45px',
  marginLeft: '39px',
  backgroundRepeat: 'no-repeat',
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

  hidePreview = () => {
    this.setState({
      isPreviewVisible: false,
      mobile: false
    });
  }

  componentDidMount = () => {
    if (window.location.href.indexOf(this.generateHistoryAnchor(this.props.bannerData.name)) === -1) {
      window.history.pushState(null, null, this.generateHistoryAnchor(this.props.bannerData.name));
    }
  }

  generateHistoryAnchor = (name) => {
    switch (name) {
      case 'Banner Image':
        return '?banner_image';

      case 'Banner HTML5':
        return '?banner_html5';

      case 'Screenglide HTML5':
        return '?banner_screenglide_html5';

      case 'Screenglide HTML5 с видео':
        return '?banner_screenglide_html5_video';

      case 'Banner Interscroller HTML5':
        return '?banner_interscroller_html5';

      case 'BannerLine HTML5':
        return '?banner_line_html5';

      case 'Banner Slider':
        return '?banner_slider';

      case 'Fullscreen HTML5':
        return '?banner_fullscreen_html5';

      case 'Fullscreen HTML5 с видео':
        return '?banner_fullscreen_html5_video';

      case 'Banner Video':
        return '?banner_video';

      case 'Video VPAID VAST 3.0 Viewability':
        return '?banner_video_vpaid';

      case 'InPage video':
        return '?banner_inpage_video';

      case 'Background HTML5':
        return '?banner_background';

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
      <div className="bannerPreviewImage" style={{backgroundImage: this.props.bannerData.image}}></div>
      <h1 className="innerHeading" id="innerHeading">{this.props.bannerData.name}</h1>
      <div className="bannerDescription">
        {this.props.bannerData.description}<br /><br />
        <div className="documentationLink description">
          <span>Подробнее про его настройку читайте в&nbsp;</span>
          <a className="link innerLink" href={this.props.bannerData.documentationUrl} target="_blank" rel="noopener noreferrer">документации<div style={externalLinkIcon}></div></a>
        </div>
      </div>
      <div style={{overflow: 'auto'}}>
        <div className="previewButton" style={{marginTop: '23px'}} onClick={this.showDesktopPreview}>
          <div className="documentationLink">
            <div className="previewDesktopIcon" style={previewDesktopIcon}></div>Пример отображения на десктопе
          </div>
        </div>
        {desktopOnly.indexOf(this.props.bannerData.name) === -1 &&
          <div className="previewButton" onClick={this.showMobilePreview}>
            <div className="documentationLink">
              <div className="previewMobileIcon" style={previewMobileIcon}></div>Пример отображения на мобильном устройстве
            </div>
          </div>
        }
        <div className="documentationLink" style={{marginTop: '31px'}}>
          <a className="link innerLink" href={this.props.bannerData.exampleUrl} target="_blank" rel="noopener noreferrer">Открыть пример в новом окне<div style={externalLinkIcon}></div></a>
        </div>
      </div>
      {this.state.isPreviewVisible === true &&
        <Preview hidePreview={this.hidePreview}
        url={this.props.bannerData.exampleUrl}
        width={this.state.mobile ? '350px' : this.props.bannerData.name === 'Background HTML5' ? '1400px' : '1000px'}
        height="600px"
        marginTop="60px"
      />}
      </div>
    )
  }
}

export default Banner;
