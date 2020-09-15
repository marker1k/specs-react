import React from 'react';
import Card from './Card';
import './formatlist.css';

class Formatlist extends React.Component {
  render() {
    return (
      <div id="formatList">
      <div id="baseFormats">
      <h1 style={{width: '324px'}}className="heading">Базовые форматы</h1>
      <div className="row">
        <Card
          backgroundImage={`url(https://avatars.mds.yandex.net/get-adfox-content/2788782/200914_adfox_1438452_8a5c89e01cede46c1cc1448e33906c8c_banner_image_4x.png/optimize.webp)`}
          heading="Banner Image"
          text="Баннер, который отображает изображение со ссылкой."
          clickFunction={this.props.changeView}
        />

        <Card
          backgroundImage={`url(https://avatars.mds.yandex.net/get-adfox-content/2367573/200915_adfox_1438452_a3953e59bcf5d42ac8a99def4f3080f4_banner_html5.png/optimize.webp)`}
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
          backgroundImage={`url(https://avatars.mds.yandex.net/get-adfox-content/2462621/200915_adfox_1438452_36c56664ffb4e8cfc0eb6cd4bf8a71bc_screenglide_html5.gif/optimize.webp?webp=false)`}
          heading="Screenglide HTML5"
          text="Интерактивный HTML5 баннер, расхлопывающийся в зависимости от действий пользователя (клик, наведение и т.д.), со сдвигом контента или поверх его."
          clickFunction={this.props.changeView}
        />

        <Card
          backgroundImage={`url(https://avatars.mds.yandex.net/get-adfox-content/2367573/200915_adfox_1438452_dcbc39487ca0066a6acbac8ad7db35df_screenglide_html5_video.gif/optimize.webp?webp=false)`}
          heading="Screenglide HTML5 с видео"
          text="Расхлопывающийся баннер с видео, для размещения которого требуется подготовить HTML-код или изображения и видео-файл или ссылку на Wrapper XML."
          clickFunction={this.props.changeView}
        />
      </div>
      <div className="row">
        <Card
          backgroundImage={`url(https://avatars.mds.yandex.net/get-adfox-content/2804317/200915_adfox_1438452_42a7f296ca30a6a7922d6f5b9d0619b0_banner_interscroller.png/optimize.webp)`}
          heading="Banner Interscroller HTML5"
          text="Баннер в статьях с использованием параллакс эффекта."
          clickFunction={this.props.changeView}
        />

        <Card
          backgroundImage={`url(https://avatars.mds.yandex.net/get-adfox-content/2367573/200915_adfox_1438452_b0435c945ef6a12f060b9a4cd84c95e1_banner_line_html5.gif/optimize.webp?webp=false)`}
          heading="BannerLine HTML5"
          text="Перетяжка с функцией расхлопа, в виде HTML5 креатива или изображений, расположенная поверх контента сайта у одной из сторон браузера."
          clickFunction={this.props.changeView}
        />
      </div>
      <div className="row">
        <Card
          backgroundImage={`url(https://avatars.mds.yandex.net/get-adfox-content/2804317/200915_adfox_1438452_3085cdd43d89dc0bb2fb4ee9f0bf6579_banner_slider.png/optimize.webp)`}
          heading="Banner Slider"
          text="Отображает карусель изображений."
          clickFunction={this.props.changeView}
        />

        <Card
          backgroundImage={`url(https://avatars.mds.yandex.net/get-adfox-content/2914398/200915_adfox_1438452_8a5b22997637ab52710caad0e5111f0d_fullscreen_html5.png/optimize.webp)`}
          heading="Fullscreen HTML5"
          text="Полноэкранный баннер, для размещения которого требуется подготовить HTML-код и/или изображение."
          clickFunction={this.props.changeView}
        />
      </div>
      <div className="row">
        <Card
          backgroundImage={`url(https://avatars.mds.yandex.net/get-adfox-content/2815276/200915_adfox_1438452_0362efe3fb3d3b8d742f2da1d7d44aeb_fullscreen_html5_video.png/optimize.webp)`}
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
          backgroundImage={`url(https://avatars.mds.yandex.net/get-adfox-content/2367573/200915_adfox_1438452_b8ca5b29103ee7d6f561bc9194cb3045_banner_video.png/optimize.webp)`}
          heading="Banner Video"
          text="Баннер, в который встроен видео плеер, принимающий как видео-файл, так и ссылку на Wrapper XML."
          clickFunction={this.props.changeView}
        />

        <Card
          backgroundImage={`url(https://avatars.mds.yandex.net/get-adfox-content/2804317/200915_adfox_1438452_601dfa08a6becf5d2913b1eda5813775_video_vpaid.png/optimize.webp)`}
          heading="Video VPAID VAST 3.0 Viewability"
          text="Видеореклама VPAID в плеере VAST 3.0 с проверкой видимости."
          clickFunction={this.props.changeView}
        />
      </div>
      <div className="row">
        <Card
          backgroundImage={`url(https://avatars.mds.yandex.net/get-adfox-content/2804317/200915_adfox_1438452_f7fd8cfe6481c2e2f71fbb832bc50ee5_inpage_video.png/optimize.webp)`}
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
          backgroundImage={`url(https://avatars.mds.yandex.net/get-adfox-content/2462621/200915_adfox_1438452_a90c8492693fb6891e34a80ae0c95f92_background_html5.png/optimize.webp)`}
          heading="Background HTML5"
          text="Замена фона сайта на HTML креатив или изображение."
          clickFunction={this.props.changeView}
        />
      </div>
      </div>


    </div>
    )
  }
}

export default Formatlist;
