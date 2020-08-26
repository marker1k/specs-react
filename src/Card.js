import React, { useState } from 'react';
import './card.css';
import external_link from './img/external_link.svg';

const externalLinkIcon = {
  backgroundImage: `url(${external_link})`,
  width: '19px',
  height: '19px',
  display: 'inline-block',
  marginLeft: '8px',
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
      break;

      case 'Banner HTML5':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-html5';
      break;

      case 'Screenglide HTML5':
        return 'https://yandex.ru/promo/yan/adfox-specs/screenglide-html5';
      break;

      case 'Screenglide HTML5 с видео':
        return 'https://yandex.ru/promo/yan/adfox-specs/screenglide-html5-video';
      break;

      case 'Banner Interscroller HTML5':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-interscroller';
      break;

      case 'BannerLine HTML5':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-line';
      break;

      case 'Banner Slider':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-slider';
      break;

      case 'Fullscreen HTML5':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-fullscreen';
      break;

      case 'Fullscreen HTML5 с видео':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-fullscreen-video';
      break;

      case 'Banner Video':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-video';
      break;

      case 'Video VPAID VAST 3.0 Viewability':
        return 'https://yandex.ru/promo/yan/adfox-specs/video-vpaid';
      break;

      case 'InPage video':
        return 'https://yandex.ru/promo/yan/adfox-specs/banner-inpage';
      break;

      case 'Background HTML5':
        return 'https://yandex.ru/promo/yan/adfox-specs/screenglide-html5';
      break;

      case 'Header Bidding':
        return 'https://yandex.ru/promo/yan/adfox-specs/header-bidding';
      break;

      default:
        return 'https://ya.ru/';
    }
  };

  generateHelpUrl = (name) => {
    switch (name) {
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
        return 'https://yandex.ru/support/adfox-sites/monetization/header-bidding.html';
      break;

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
            Подробнее про настройку читайте в&nbsp;
            <span style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <a className="innerLink" href={this.generateHelpUrl(this.props.heading)} target="_blank">документации</a><div style={externalLinkIcon}></div>
            </span>
        </div>}
      </div>
      </div>

    )
  }
}

export default Card;
