import React from 'react';
import './card.css';

const externalLinkIcon = {
  backgroundImage: `url(https://banners.adfox.ru/200831/adfox/1422758/040e1b7f4416dd99808174abe88c74c8_external_link.svg)`,
  width: '19px',
  height: '19px',
  display: 'inline-block',
  marginLeft: '8px',
  position: 'relative',
  top: '4px'
};

class Card extends React.Component {
  clickHandler = (e) => {
    if (window.innerWidth < 857) {
      window.open(this.generateExampleUrl(this.props.heading), '_blank');
    } else {
      this.props.clickFunction({
        name: this.props.heading,
        description: this.props.text,
        image: this.props.backgroundImage,
        documentationUrl: this.generateHelpUrl(this.props.heading),
        exampleUrl: this.generateExampleUrl(this.props.heading)
      });
    }
  };

  generateExampleUrl = function(name) {
    switch (name) {
      case 'Banner Image':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-image';

      case 'Banner HTML5':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-html5';

      case 'Screenglide HTML5':
        return 'https://yandex.ru/promo/yan/adfox-specs/screenglide-html5';

      case 'Screenglide HTML5 с видео':
        return 'https://yandex.ru/promo/yan/adfox-specs/screenglide-html5-video';

      case 'Banner Interscroller HTML5':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-interscroller';

      case 'BannerLine HTML5':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-line';

      case 'Banner Slider':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-slider';

      case 'Fullscreen HTML5':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-fullscreen';

      case 'Fullscreen HTML5 с видео':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-fullscreen-video';

      case 'Banner Video':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-video';

      case 'Video VPAID VAST 3.0 Viewability':
        return 'https://yandex.ru/promo/yan/adfox-specs/video-vpaid';

      case 'InPage video':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-inpage';

      case 'Background HTML5':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-background-html5';

      case 'Header Bidding':
        return 'https://yandex.ru/promo/yan/adfox-specs/header-bidding';

      default:
        return 'https://ya.ru/';
    }
  };

  generateHelpUrl = (name) => {
    switch (name) {
      case 'Banner Image':
        return 'https://yandex.ru/support/adfox-specs/banner-image.html';

      case 'Banner HTML5':
        return 'https://yandex.ru/support/adfox-specs/banner-html5.html';

      case 'Screenglide HTML5':
        return 'https://yandex.ru/support/adfox-specs/screenglide-html5.html';

      case 'Screenglide HTML5 с видео':
        return 'https://yandex.ru/support/adfox-specs/screenglide-html5-with-video.html';

      case 'Banner Interscroller HTML5':
        return 'https://yandex.ru/support/adfox-specs/interscroller.html';

      case 'BannerLine HTML5':
        return 'https://yandex.ru/support/adfox-specs/bannerline-html5.html';

      case 'Banner Slider':
        return 'https://yandex.ru/support/adfox-specs/banner-slider.html';

      case 'Fullscreen HTML5':
        return 'https://yandex.ru/support/adfox-specs/fullscreen-html5.html';

      case 'Fullscreen HTML5 с видео':
        return 'https://yandex.ru/support/adfox-specs/fullscreen-html5-with-video.html';

      case 'Banner Video':
        return 'https://yandex.ru/support/adfox-specs/banner-video.html';

      case 'Video VPAID VAST 3.0 Viewability':
        return 'https://yandex.ru/support/adfox-specs/video-vpaid.html';

      case 'InPage video':
        return 'https://yandex.ru/support/adfox-specs/inpage.html';

      case 'Background HTML5':
        return 'https://yandex.ru/support/adfox-specs/background-html5.html';

      case 'Header Bidding':
        return 'https://yandex.ru/support/adfox-sites/monetization/header-bidding.html';

      default:
        return 'https://ya.ru/';
    }
  };

  render() {
    return (
      <div className="card">
      <div onClick={this.clickHandler}>
        <div className="preview"
        style={{
          backgroundImage: this.props.backgroundImage
        }}>
        </div>
        <h4 className="cardHeading">{this.props.heading}</h4>
        <div className="cardText">
          {this.props.text}
        </div>
      </div>
      <div>
        {window.innerWidth < 857 &&
          <div className="mobileDocumentationLink cardText">
            <br />
            Подробнее про настройку читайте в&nbsp;
            <span style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <a className="innerLink" href={this.generateHelpUrl(this.props.heading)} target="_blank" rel="noopener noreferrer">документации<div style={externalLinkIcon}></div></a>
            </span>
        </div>}
      </div>
      </div>

    )
  }
}

export default Card;
