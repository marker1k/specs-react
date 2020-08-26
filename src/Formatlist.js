import React, { useState } from 'react';
import Card from './Card';
import './formatlist.css';

import banner_image_preview from './img/previews/banner_image.png';
import banner_html5_preview from './img/previews/banner_html5.png';
import banner_screenglide_html5_preview from './img/previews/Screenglide_1.gif';
import banner_screenglide_video_preview from './img/previews/Screenglide_1_video.gif';
import banner_interscroller_preview from './img/previews/Interscroller_parallax.png';
import banner_line_preview from './img/previews/BannerLine_HTML5.gif';
import banner_slider_preview from './img/previews/Banner_Slider.png';
import banner_fullscreen_preview from './img/previews/fullscreen_html5_2.png';
import banner_fullscreen_video_preview from './img/previews/fullscreen_html5_video.png';
import banner_video_preview from './img/previews/banner_viddeo.png';
import banner_video_vpaid_preview from './img/previews/fullscreen_html5_2.png';
import banner_background_preview from './img/previews/background_html5.png';
import header_bidding_preview from './img/previews/Header_bidding.png';


const headingStyleBottom = {
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '36px',
  lineHeight: '42px',
  alignItems: 'center',
  fontFeatureSettings: '"pnum" on, "lnum" on',
  color: '#000000',
  marginTop: '99px'
};

class Formatlist extends React.Component {
  render() {
    return (
      <div id="formatList">
      <div id="baseFormats">
      <h1 style={{width: '324px'}}className="heading">Базовые форматы</h1>
      <div className="row">
        <Card
          backgroundImage={`url(${banner_image_preview})`}
          heading="Banner Image"
          text="Баннер, который отображает изображение со ссылкой."
          clickFunction={this.props.changeView}
        />

        <Card
          backgroundImage={`url(${banner_html5_preview})`}
          heading="Banner HTML5"
          text="Отображает произвольное HTML-содержимое."
          clickFunction={this.props.changeView}
        />
      </div>
      </div>
      <div id="screenGlide">
      <h1 style={{width: '380px'}} className="heading">Интерактивные форматы</h1>
      <div className="row">
        <Card
          backgroundImage={`url(${banner_screenglide_html5_preview})`}
          heading="Screenglide HTML5"
          text="Интерактивный HTML5 баннер, расхлопывающийся в зависимости от действий пользователя (клик, наведение и т.д.), со сдвигом контента или поверх его."
          clickFunction={this.props.changeView}
        />

        <Card
          backgroundImage={`url(${banner_screenglide_video_preview})`}
          heading="Screenglide HTML5 с видео"
          text="Расхлопывающийся баннер с видео, для размещения которого требуется подготовить HTML-код или изображения и видео-файл или ссылку на Wrapper XML."
          clickFunction={this.props.changeView}
        />
      </div>
      <div className="row">
        <Card
          backgroundImage={`url(${banner_interscroller_preview})`}
          heading="Banner Interscroller HTML5"
          text="Баннер в статьях с использованием параллакс эффекта."
          clickFunction={this.props.changeView}
        />

        <Card
          backgroundImage={`url(${banner_line_preview})`}
          heading="BannerLine HTML5"
          text="Перетяжка с функцией расхлопа, в виде HTML5 креатива или изображений, расположенная поверх контента сайта у одной из сторон браузера."
          clickFunction={this.props.changeView}
        />
      </div>
      <div className="row">
        <Card
          backgroundImage={`url(${banner_slider_preview})`}
          heading="Banner Slider"
          text="Отображает карусель изображений."
          clickFunction={this.props.changeView}
        />

        <Card
          backgroundImage={`url(${banner_fullscreen_preview})`}
          heading="Fullscreen HTML5"
          text="Полноэкранный баннер, для размещения которого требуется подготовить HTML-код и/или изображение."
          clickFunction={this.props.changeView}
        />
      </div>
      <div className="row">
        <Card
          backgroundImage={`url(${banner_fullscreen_video_preview})`}
          heading="Fullscreen HTML5 с видео"
          text="Полноэкранный баннер с видео, для размещения которого требуется подготовить видео-файл или VPAID-креатив."
          clickFunction={this.props.changeView}
        />
      </div>
      </div>
      <div id="video">
      <h1 style={{width: '100px'}} className="heading">Video</h1>
      <div className="row">
        <Card
          backgroundImage={`url(${banner_video_preview})`}
          heading="Banner Video"
          text="Баннер, в который встроен видео плеер, принимающий как видео-файл, так и ссылку на Wrapper XML."
          clickFunction={this.props.changeView}
        />

        <Card
          backgroundImage={`url(${banner_video_vpaid_preview})`}
          heading="Video VPAID VAST 3.0 Viewability"
          text="Видеореклама VPAID в плеере VAST 3.0 с проверкой видимости."
          clickFunction={this.props.changeView}
        />
      </div>
      <div className="row">
        <Card
          backgroundImage={`url(${banner_video_vpaid_preview})`}
          heading="InPage video"
          text="Видеореклама для сайтов, у которых нет видеоконтента."
          clickFunction={this.props.changeView}
        />
      </div>
      </div>
      <div id="background">
      <h1 style={{width: '203px'}} className="heading">Background</h1>
      <div className="row">
        <Card
          backgroundImage={`url(${banner_background_preview})`}
          heading="Background HTML5"
          text="Замена фона сайта на HTML креатив или изображение."
          clickFunction={this.props.changeView}
        />
      </div>
      </div>
      <div id="headerBidding">
        <h1 style={{width: '260px'}} className="heading">Header Bidding</h1>
        <div className="row">
          <Card
            backgroundImage={`url(${header_bidding_preview})`}
            heading="Header Bidding"
            text="Примеры баннеров сторонних монетизаторов."
            clickFunction={this.props.changeView}
          />
        </div>
      </div>

    </div>
    )
  }
}

export default Formatlist;
