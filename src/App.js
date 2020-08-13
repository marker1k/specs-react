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



const topMenuStyles = {
  width: '100%',
  height: '75px',
  background: '#FFFFFF',
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)'
};

const topMenuButtonsStyles = {
  // lineHeight: '70px'
  marginTop: '18px',
  float: 'right',
  marginRight: '44px'
};

const logoStyles = {
  backgroundImage: "url('https://avatars.mds.yandex.net/get-adfox-content/2462621/200803_adfox_1393261_8c08f5cbf441c7f3a9ff9d0d195d6a08_logo_adfox.png/optimize.webp')",
  width: '107px',
  height: '28px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  position: 'absolute',
  marginTop: '24px',
  marginLeft: '44px'
};

const rowStyles = {
  overflow: 'auto'
};

const listener = e => {
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

function App() {
  const handleClick = function(data) {
      setVisible(true);
      selectBanner(data);
      setTimeout(function(){
        document.getElementById("innerHeading").scrollIntoView({block: "start", behavior: "smooth"});
      }, 200);
    };


  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  const [value, setValue] = useState('a');
  const [isVisible, setVisible] = useState(false);
  const [selectedBanner, selectBanner] = useState({});

  return (
    <div>
    {/* Top menu start */}
    <div style={topMenuStyles} id="topMenu">
      <div style={logoStyles}>
      </div>
      <Button
        className="topMenuButtons"
        type="link"
        url="https://yandex.ru/support/adfox-sites/"
        target="_blank"
        theme="link"
        size="m">
        Общая документация к системе
      </Button>
      <Button
        className="topMenuButtons"
        type="link"
        url="https://adfox.yandex.ru/"
        target="_blank"
        theme="link"
        size="m">
        Вход для клиентов
      </Button>
    </div>
    {/* Top menu end */}

  <div className="wrapper">
  {/* Left menu start */}
  <div
    className="leftMenu"
  >
    <Menu
      size="m"
      theme="normal"
      value={value}
      items={[
        { value: 'a', content: 'Базовые форматы' },
        { value: 'b', content: 'Screenglide, expandable, fullscreen' },
        { value: 'c', content: 'Video' },
        { value: 'd', content: 'Background' },
        { value: 'e', content: 'Header Bidding' }
      ]}
      onChange={(event) => {
        if (isVisible == true) {
          setVisible(false);
          selectBanner('');
        }
        setValue(event.target.value);
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

    {/* viewport start */}
    <div className="viewport">
      {isVisible == false && <Formatlist changeView={handleClick} />}
      {isVisible == true && <Banner bannerData={selectedBanner} />}
    </div>
    {/* viewport end */}
    </div>

    <div
      className="footer"
      style={{
        marginLeft: '77px',
        marginBottom: '50px'
      }}
    >
      <div className="contact"><a href="mailto:adfox@support.yandex.ru">Обратная связь</a></div>
      <div className="copyright">{`© Яндекс ${new Date().getFullYear()}`}</div>
      <div></div>
    </div>
    </div>
  );
}

export default App;
