import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { configureRootTheme } from '@yandex-lego/components/Theme';
import { theme } from '@yandex-lego/components/Theme/presets/default';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Menu } from '@yandex-lego/components/Menu/desktop/bundle';
import Formatlist from './Formatlist';
import Banner from './Banner';


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

const rowStyles = {
  overflow: 'auto'
};

const menuSticky = e => {
  var elem = document.querySelector('#topMenu');
  var top = elem.getBoundingClientRect().top;
  if (top < -75) {
    document.querySelector('.leftMenu').style.position = 'fixed';
    document.querySelector('.leftMenu').style.top = '0';
  } else {
    document.querySelector('.leftMenu').style.position = 'absolute';
    document.querySelector('.leftMenu').style.top = '';
  }
};

const isElementXPercentInViewport = function(el, percentVisible) {
  let
    rect = el.getBoundingClientRect(),
    windowHeight = (window.innerHeight || document.documentElement.clientHeight);

  return !(
    Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
    Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
  )
};


function App() {
  const onScrollMenuHandle = e => {
    if (document.querySelector('#formatList') != null) {
      // var baseFormats = document.querySelector('#baseFormats').getBoundingClientRect();
      // var screenGlide = document.querySelector('#screenGlide').getBoundingClientRect();
      // console.log('Base Formats: ' + baseFormats);
      // console.log('screenGlide: ' + screenGlide);
      if (isElementXPercentInViewport(document.querySelector('#baseFormats'), 15)) {
        setValue('a');
      }

      if (isElementXPercentInViewport(document.querySelector('#screenGlide'), 15)) {
        setValue('b');
      }

      if (isElementXPercentInViewport(document.querySelector('#video'), 15)) {
        setValue('c');
      }

      if (isElementXPercentInViewport(document.querySelector('#background'), 15)) {
        setValue('d');
      }

      if (isElementXPercentInViewport(document.querySelector('#headerBidding'), 15)) {
        setValue('e');
      }

    }
  };


  const handleClick = function(data) {
      setVisible(true);
      selectBanner(data);
      document.querySelector("#topMenu").scrollIntoView({block: "start", behavior: "auto"});
    };

    const allFormatsClickHandler = function() {
        setVisible(false);
        document.querySelector("#topMenu").scrollIntoView({block: "start", behavior: "auto"});
      };



  useEffect(() => {
    window.addEventListener("scroll", menuSticky);
    window.addEventListener("scroll", onScrollMenuHandle);
    return () => {
      window.removeEventListener("scroll", menuSticky);
      window.removeEventListener("scroll", onScrollMenuHandle);
    };
  });

  const [value, setValue] = useState('a');
  const [isVisible, setVisible] = useState(false);
  const [selectedBanner, selectBanner] = useState({});

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
        Вход для клиентов
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
      value={value}
      items={[
        { value: 'a', content: 'Базовые форматы' },
        { value: 'b', content: 'Интерактивные форматы' },
        { value: 'c', content: 'Video' },
        { value: 'd', content: 'Background' },
        { value: 'e', content: 'Header Bidding' }
      ]}
      onChange={(event) => {
        if (isVisible == true) {
          setVisible(false);
          selectBanner('');
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

          case 'e':
          setTimeout(function(){
            document.getElementById("headerBidding").scrollIntoView({block: "start", behavior: "smooth"});
          }, 200);
          break;

          default:
          alert( "Нет таких значений" );
        }
      }}
    />
    <div className="footer">
      <button className="footerButton" onClick={allFormatsClickHandler}>Все форматы</button>
      <div className="contact"><a className="link" href="mailto:adfox@support.yandex.ru">Обратная связь</a></div>
      <div className="copyright">{`© Яндекс ${new Date().getFullYear()}`}</div>
    </div>
    </div>
    {/* Left menu end */}

    {/* viewport start */}
    <div className="viewport">
      {isVisible == false && <Formatlist changeView={handleClick} />}
      {isVisible == true && <Banner bannerData={selectedBanner} />}
    </div>
    {/* viewport end */}
    </div>

    </div>
  );
}

export default App;
