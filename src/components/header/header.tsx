import React from 'react';
import './header.scss';
import { runHeader } from './header.instances';

import logo from './img/logo.svg';

import Btn from '../../components/button/button';

type Props = {
  id?: string;
  menuItems?: Menu[];
  authorization?: boolean;
  userName?: string;
};
type Menu = {
  menuItem: string;
  link?: string;
  type?: string;
  state?: string;
  submenu?: Menu[];
};

type Button = {
  height: string;
  text: string;
  border?: boolean;
};

class Header extends React.Component<Props> {
  static defaultProps = {
    id: 'header',
    menuItems: false,
    authorization: false,
    userName: 'Имя',
  };

  data: Props;
  btnLogin: Button;
  btnRegistr: Button;

  constructor(props: Props) {
    super(props);
    this.data = this.props;
    this.btnLogin = {
      height: 'narrow',
      text: 'Войти',
      border: true,
    };
    this.btnRegistr = {
      height: 'narrow',
      text: 'Зарегистрироваться',
    };
  }
  printMenu(items: Menu[]) {
    return items.map((item: Menu, index) => (
      <li
        className={
          'header__menu-li ' +
          (item.state === 'active' ? 'header__menu-li_active' : '') +
          (item.type === 'expand' ? 'header__menu-li_expand js-header__menu-li_expand' : '')
        }
        key={`${this.data.id}menu${index}`}
      >
        <a className="header__menu-a" href={item.link}>
          {item.menuItem}
        </a>
        {item.submenu && <ul className="header__submenu">{this.submenu(item.submenu)}</ul>}
      </li>
    ));
  }
  submenu(sbm: Menu[]) {
    return sbm.map((sbmItem: Menu, index: number) => (
      <li className="header__submenu-li" key={`${this.data.id}submenu${index}`}>
        <a className="header__submenu-a" href={sbmItem.link}>
          {sbmItem.menuItem}
        </a>
      </li>
    ));
  }

  render() {
    let {
      data: { menuItems, authorization, userName },
      btnLogin,
      btnRegistr,
    } = this;

    return (
      <header className="header">
        <div className="header__content-container">
          <a className="header__logo-link" href="./landing-page.html">
            <img className="header__logo" src={logo} alt="logo" />
          </a>
          <div className="header__menu-mobile js-header__menu-mobile"></div>
          <div className="header__links header__links_hidden">
            {menuItems && (
              <nav className="header__block-menu">
                <ul className="header__menu">{this.printMenu(menuItems)}</ul>
              </nav>
            )}
            {authorization ? (
              <div className="header__block-login">
                <div className="header__login-vertical-line"></div>
                <p>{userName}</p>
              </div>
            ) : (
              <div className="header__block-login">
                <div className="header__btn header__btn_border">
                  <Btn text={btnLogin.text} height={btnLogin.height} border={btnLogin.border} />
                </div>
                <div className="header__btn header__btn_gradient">
                  <Btn text={btnRegistr.text} height={btnRegistr.height} />
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }

  componentDidMount() {
    runHeader();
  }
}

export default Header;
