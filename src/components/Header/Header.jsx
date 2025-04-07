// styles
import './Header.scss';

// images
import imgLogo from '../../images/logo__1.svg';
import imgLogo2 from '../../images/logo__2.svg';
import imgVK from '../../images/vk.svg';
import imgTG from '../../images/telegram.svg';

// components
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button.jsx';


export function Header() {
  return (
    <header className="header">
      <div className="header__wrapper-logos">
      <img src={imgLogo} alt=""  className="header__logo-1" />
      <img src={imgLogo2} alt=""  className="header__logo-2" />
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__menu-point">
            <Link to="./">Главная</Link>
          </li>
          <li className="header__menu-point">
            <Link to="./about">Об отеле</Link>
          </li>
          <li className="header__menu-point">
            <Link to="./rooms">Номера</Link>
          </li>
          <li className="header__menu-point">
            <Link to="./territory">Территория</Link>
          </li>
          <li className="header__menu-point">
            <Link to="./contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
      <div className="header__wrapper-images">
        <img src={imgVK} alt="" />
        <img src={imgTG} alt="" />
        <Button size="small" style="white">Групповые заезды</Button>
      </div>
    </header>
  );
}