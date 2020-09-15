import React from 'react';
import './App.css';
import { configureRootTheme } from '@yandex-lego/components/Theme';
import { theme } from '@yandex-lego/components/Theme/presets/default';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Menu } from '@yandex-lego/components/Menu/desktop/bundle';
import Formatlist from './Formatlist';
import Banner from './Banner';
import Preview from './Preview';


configureRootTheme({ theme });

const logoStyles = {
  backgroundImage: "url('https://avatars.mds.yandex.net/get-adfox-content/2462621/200803_adfox_1393261_8c08f5cbf441c7f3a9ff9d0d195d6a08_logo_adfox.png/optimize.webp')",
  width: '107px',
  height: '28px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  position: 'absolute',
  marginLeft: '44px'
};

const BannerFromAnchor = (props) => {
  let banner = props.location.split('?')[1];
  if (banner === 'banner_image') {
      return (
        <Banner bannerData={{
          image: 'url(https://avatars.mds.yandex.net/get-adfox-content/2788782/200914_adfox_1438452_8a5c89e01cede46c1cc1448e33906c8c_banner_image_4x.png/optimize.webp)',
          name: 'Banner Image',
          description: 'Баннер, который отображает изображение со ссылкой.',
          documentationUrl: 'https://yandex.ru/support/adfox-specs/banner-image.html',
          exampleUrl: 'https://yandex.ru/promo/yan/adfox-specs/banner-image',
        }} />
    )
  } else if (banner === 'banner_html5') {
    return (
        <Banner bannerData={{
          image: 'url(https://avatars.mds.yandex.net/get-adfox-content/2367573/200915_adfox_1438452_a3953e59bcf5d42ac8a99def4f3080f4_banner_html5.png/optimize.webp)',
          name: 'Banner HTML5',
          description: 'Отображает произвольное HTML-содержимое.',
          documentationUrl: 'https://yandex.ru/support/adfox-specs/banner-html5.html',
          exampleUrl: 'https://yandex.ru/promo/yan/adfox-specs/banner-html5',
        }} />
    )
  } else if (banner === 'banner_screenglide_html5') {
    return (
        <Banner bannerData={{
          image: 'url(https://avatars.mds.yandex.net/get-adfox-content/2462621/200915_adfox_1438452_36c56664ffb4e8cfc0eb6cd4bf8a71bc_screenglide_html5.gif/optimize.webp?webp=false)',
          name: 'Screenglide HTML5',
          description: 'Интерактивный HTML5 баннер, расхлопывающийся в зависимости от действий пользователя (клик, наведение и т.д.), со сдвигом контента или поверх его.',
          documentationUrl: 'https://yandex.ru/support/adfox-specs/screenglide-html5.html',
          exampleUrl: 'https://yandex.ru/promo/yan/adfox-specs/screenglide-html5',
        }} />
    )

  } else if (banner === 'banner_screenglide_html5_video') {
    return (
        <Banner bannerData={{
          image: 'url(https://avatars.mds.yandex.net/get-adfox-content/2367573/200915_adfox_1438452_dcbc39487ca0066a6acbac8ad7db35df_screenglide_html5_video.gif/optimize.webp?webp=false)',
          name: 'Screenglide HTML5 с видео',
          description: 'Расхлопывающийся баннер с видео, для размещения которого требуется подготовить HTML-код или изображения и видео-файл или ссылку на Wrapper XML.',
          documentationUrl: 'https://yandex.ru/support/adfox-specs/screenglide-html5-with-video.html',
          exampleUrl: 'https://yandex.ru/promo/yan/adfox-specs/screenglide-html5-video',
        }} />
    )
  } else if (banner === 'banner_interscroller_html5') {
    return (
        <Banner bannerData={{
          image: 'url(https://avatars.mds.yandex.net/get-adfox-content/2804317/200915_adfox_1438452_42a7f296ca30a6a7922d6f5b9d0619b0_banner_interscroller.png/optimize.webp)',
          name: 'Banner Interscroller HTML5',
          description: 'Баннер в статьях с использованием параллакс эффекта.',
          documentationUrl: 'https://yandex.ru/support/adfox-specs/interscroller.html',
          exampleUrl: 'https://yandex.ru/promo/yan/adfox-specs/banner-interscroller',
        }} />
    )
  } else if (banner === 'banner_line_html5') {
    return (
        <Banner bannerData={{
          image: 'url(https://avatars.mds.yandex.net/get-adfox-content/2367573/200915_adfox_1438452_b0435c945ef6a12f060b9a4cd84c95e1_banner_line_html5.gif/optimize.webp?webp=false)',
          name: 'BannerLine HTML5',
          description: 'Перетяжка с функцией расхлопа, в виде HTML5 креатива или изображений, расположенная поверх контента сайта у одной из сторон браузера.',
          documentationUrl: 'https://yandex.ru/support/adfox-specs/bannerline-html5.html',
          exampleUrl: 'https://yandex.ru/promo/yan/adfox-specs/banner-line',
        }} />
    )

  } else if (banner === 'banner_slider') {
    return (
        <Banner bannerData={{
          image: 'url(https://avatars.mds.yandex.net/get-adfox-content/2804317/200915_adfox_1438452_3085cdd43d89dc0bb2fb4ee9f0bf6579_banner_slider.png/optimize.webp)',
          name: 'Banner Slider',
          description: 'Отображает карусель изображений.',
          documentationUrl: 'https://yandex.ru/support/adfox-specs/banner-slider.html',
          exampleUrl: 'https://yandex.ru/promo/yan/adfox-specs/banner-slider',
        }} />
    )
  } else if (banner === 'banner_fullscreen_html5') {
    return (
        <Banner bannerData={{
          image: 'url(https://avatars.mds.yandex.net/get-adfox-content/2914398/200915_adfox_1438452_8a5b22997637ab52710caad0e5111f0d_fullscreen_html5.png/optimize.webp)',
          name: 'Fullscreen HTML5',
          description: 'Отображает карусель изображений.',
          documentationUrl: 'https://yandex.ru/support/adfox-specs/fullscreen-html5.html',
          exampleUrl: 'https://yandex.ru/promo/yan/adfox-specs/banner-fullscreen',
        }} />
    )
  } else if (banner === 'banner_fullscreen_html5_video') {
    return (
        <Banner bannerData={{
          image: 'url(https://avatars.mds.yandex.net/get-adfox-content/2914398/200915_adfox_1438452_8a5b22997637ab52710caad0e5111f0d_fullscreen_html5.png/optimize.webp)',
          name: 'Fullscreen HTML5 с видео',
          description: 'Полноэкранный баннер с видео, для размещения которого требуется подготовить видео-файл или VPAID-креатив.',
          documentationUrl: 'https://yandex.ru/support/adfox-specs/fullscreen-html5-with-video.html',
          exampleUrl: 'https://yandex.ru/promo/yan/adfox-specs/banner-fullscreen-video',
        }} />
    )
  } else if (banner === 'banner_video') {
    return (
        <Banner bannerData={{
          image: 'url(https://avatars.mds.yandex.net/get-adfox-content/2367573/200915_adfox_1438452_b8ca5b29103ee7d6f561bc9194cb3045_banner_video.png/optimize.webp)',
          name: 'Banner Video',
          description: 'Баннер, в который встроен видео плеер, принимающий как видео-файл, так и ссылку на Wrapper XML.',
          documentationUrl: 'https://yandex.ru/support/adfox-specs/banner-video.html',
          exampleUrl: 'https://yandex.ru/promo/yan/adfox-specs/banner-video',
        }} />
    )
  } else if (banner === 'banner_video_vpaid') {
    return (
        <Banner bannerData={{
          image: 'url(https://avatars.mds.yandex.net/get-adfox-content/2804317/200915_adfox_1438452_601dfa08a6becf5d2913b1eda5813775_video_vpaid.png/optimize.webp)',
          name: 'Video VPAID VAST 3.0 Viewability',
          description: 'Видеореклама VPAID в плеере VAST 3.0 с проверкой видимости.',
          documentationUrl: 'https://yandex.ru/support/adfox-specs/video-vpaid.html',
          exampleUrl: 'https://yandex.ru/promo/yan/adfox-specs/video-vpaid',
        }} />
    )
  } else if (banner === 'banner_inpage_video') {
    return (
        <Banner bannerData={{
          image: 'url(https://avatars.mds.yandex.net/get-adfox-content/2804317/200915_adfox_1438452_f7fd8cfe6481c2e2f71fbb832bc50ee5_inpage_video.png/optimize.webp)',
          name: 'InPage video',
          description: 'Видеореклама для сайтов, у которых нет видеоконтента.',
          documentationUrl: 'https://yandex.ru/support/adfox-specs/inpage.html',
          exampleUrl: 'https://yandex.ru/promo/yan/adfox-specs/banner-inpage',
        }} />
    )
  } else if (banner === 'banner_background') {
    return (
        <Banner bannerData={{
          image: 'url(https://avatars.mds.yandex.net/get-adfox-content/2462621/200915_adfox_1438452_a90c8492693fb6891e34a80ae0c95f92_background_html5.png/optimize.webp)',
          name: 'Background HTML5',
          description: 'Замена фона сайта на HTML креатив или изображение.',
          documentationUrl: 'https://yandex.ru/support/adfox-specs/background-html5.html',
          exampleUrl: 'https://yandex.ru/promo/yan/adfox-specs/banner-background-html5',
        }} />
    )
  } else {
    return (
        <Banner bannerData={{
          image: 'url(https://avatars.mds.yandex.net/get-adfox-content/2788782/200914_adfox_1438452_8a5c89e01cede46c1cc1448e33906c8c_banner_image_4x.png/optimize.webp)',
          name: 'Banner Image',
          description: 'Баннер, который отображает изображение со ссылкой.',
          documentationUrl: 'https://yandex.ru/support/adfox-specs/banner-image.html',
          exampleUrl: 'https://yandex.ru/promo/yan/adfox-specs/banner-image',
        }} />
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.onScrollMenuHandle = this.onScrollMenuHandle.bind(this);
    this.state = {
      value: 'a',
      isVisible: false,
      selectedBanner: {},
      fromAnchor: false,
      feedbackVisible: false
    };
  }

  isElementXPercentInViewport = (el, percentVisible) => {
    let
      rect = el.getBoundingClientRect(),
      windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    return !(
      Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
    )
  };

  componentDidMount = () => {
    if (window.location.href.indexOf('banner') > -1) {
      this.setState({
          fromAnchor: true
        });
    }
    window.addEventListener('scroll', this.onScrollMenuHandle);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onScrollMenuHandle);
  }
  
  onScrollMenuHandle = e => {
    if (document.querySelector('#formatList') != null) {
      if (this.isElementXPercentInViewport(document.querySelector('#baseFormats'), 20)) {
        this.setState({
          value: 'a'
        });
      }

      if (this.isElementXPercentInViewport(document.querySelector('#screenGlide'), 20)) {
        this.setState({
          value: 'b'
        });
      }

      if (this.isElementXPercentInViewport(document.querySelector('#video'), 10)) {
        this.setState({
          value: 'c'
        });
      }

      if (this.isElementXPercentInViewport(document.querySelector('#background'), 40)) {
        this.setState({
          value: 'd'
        });
      }

    }
  };


 handleClick(data) {
      this.setState({
          isVisible: true,
          selectedBanner: data
        });
      // setTimeout(function(){
      //   document.querySelector("#topMenu").scrollIntoView({block: "start", behavior: "auto"});
      // }, 200);
    };

    allFormatsClickHandler = () => {
        if (this.state.fromAnchor === true) {
          this.setState({
            fromAnchor: false
          });
          let loc = window.location.href;
          window.history.pushState(null, null, loc.substring(0, loc.indexOf('?')));
        }
        this.setState({
          isVisible: false
        });
        setTimeout(function(){
          document.querySelector("#baseFormats").scrollIntoView({block: "start", behavior: "auto"});
        }, 200);  
      };

  feedbackClickHandler = () => {
    this.setState({
      feedbackVisible: true
    });
  }

  hideFeedback = () => {
    this.setState({
      feedbackVisible: false
    });
  }


  render() {
    return (
    <div>
    {/* Top menu start */}
    <div className="topMenu" id="topMenu">
      <div className="logo" style={logoStyles}>
      </div>
      <div className="topMenuButtons">
      <Button
        className="first link"
        type="link"
        url="https://yandex.ru/support/adfox-sites/"
        target="_blank"
        theme="link"
        size="m">
        Документация
      </Button>
      <Button
        className="second link"
        type="link"
        url="https://adfox.yandex.ru/"
        target="_blank"
        theme="link"
        size="m">
        Вход для партнёров
      </Button>
      </div>
    </div>
    {/* Top menu end */}

  <div className="wrapper">
  {/* Left menu start */}
  <div className="leftMenu">
    <Menu
      size="m"
      theme="normal"
      value={this.state.value}
      items={[
        { value: 'a', content: 'Базовые форматы' },
        { value: 'b', content: 'Интерактивные форматы' },
        { value: 'c', content: 'Video' },
        { value: 'd', content: 'Background' }
      ]}
      onChange={(event) => {
        if (window.location.href.indexOf('?') > -1) {
          let loc = window.location.href;
          window.history.pushState(null, null, loc.substring(0, loc.indexOf('?')));
        }
        if (this.state.fromAnchor === true) {
          this.setState({
            fromAnchor: false
          });
        }

        if (this.state.isVisible === true) {
          this.setState({
          isVisible: false,
          selectedBanner: ''
        });
        }

        switch (event.target.value) {
          case 'a':
          setTimeout(function(){
            document.getElementById("baseFormats").scrollIntoView({block: "start", behavior: "smooth"});
          }, 200);
          break;

          case 'b':
          setTimeout(function(){
            document.getElementById("screenGlide").scrollIntoView({block: "start", behavior: "smooth"});
          }, 200);
          break;

          case 'c':
          setTimeout(function(){
            document.getElementById("video").scrollIntoView({block: "start", behavior: "smooth"});
          }, 200);
          break;

          case 'd':
          setTimeout(function(){
            document.getElementById("background").scrollIntoView({block: "start", behavior: "smooth"});
          }, 200);
          break;

          default:
          alert( "Нет таких значений" );
        }
      }}
    />
    </div>
    {/* Left menu end */}

    {/* footer start */}
    <div className="footer">
      <button className="footerButton" onClick={this.allFormatsClickHandler}>Все форматы</button>
      <div className="contact"><a className="link" onClick={this.feedbackClickHandler}>Обратная связь</a></div>
      <div className="copyright">{`© Яндекс ${new Date().getFullYear()}`}</div>
    </div>
    {/* footer start */}

    {/* viewport start */}
    <div className="viewport">
      {this.state.fromAnchor && <BannerFromAnchor location={window.location.href} />}
      {this.state.isVisible === false && this.state.fromAnchor === false && <Formatlist changeView={this.handleClick} />}
      {this.state.isVisible === true &&  <Banner bannerData={this.state.selectedBanner} />}
      {this.state.feedbackVisible === true && window.innerWidth > 535 && 
        <Preview hidePreview={this.hideFeedback}
        url="https://forms.yandex.ru/surveys/10066/?form_title=Обратная связь&lang=ru&title=Обратная связь&iframe=1&path=/support/adfox-sites/feedback.html&feedback_sid=5029481811599645934&mobile=yes&service=adfox-sites&&url=https://yandex.ru/support/adfox-sites/feedback.html"
        width="600px"
        height="725px"
        marginTop="1px"
        padding="20px"
      />
      }
    </div>
    {/* viewport end */}
    </div>

    </div>
  )
  }
}

export default App;
