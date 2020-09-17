import React from 'react';

const Header = () => {
    return (<header class="header">
    <div class="container">
        <div class="header__inner">
            <div class="header__logo">
                <a href="#"><span>JE</span>TRO</a>
            </div>
            <naw class="header__menu">
                <div class="header__menu-btn">
                    <div class="header__menu-row"></div>
                    <div class="header__menu-row"></div>
                    <div class="header__menu-row"></div>
                </div>
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">blog</a></li>
                    <li><a href="#">portfolio</a></li>
                    <li><a href="#">contact us</a></li>
                </ul>
            </naw>
        </div>
    </div>
  </header>  );
  }

export default Header;