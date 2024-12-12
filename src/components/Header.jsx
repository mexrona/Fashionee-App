import Burger from "./Burger";
import Logo from "./Logo";
import Menu from "./Menu";
import Nav from "./Nav";

export default function Header() {
    return (
        <header className="header" id="header">
            <div className="container container--header">
                <div className="header__inner">
                    <div className="header__left">
                        <div className="header__menu">
                            <Burger />
                            <Logo />
                            <Menu />
                        </div>
                        <Nav />
                    </div>
                    <div className="header__right">
                        <div className="header__item">
                            <img
                                src="../public/images/icons/search.png"
                                alt="Search"
                                className="header__icon"
                            />
                        </div>
                        <div className="header__item">
                            <img
                                src="../public/images/icons/user.png"
                                alt="My profile"
                                className="header__icon"
                            />
                        </div>
                        <div className="header__item">
                            <img
                                src="../public/images/icons/heart.png"
                                alt="Wishlist"
                                className="header__icon"
                            />
                            <div className="header__count" id="heart">
                                0
                            </div>
                        </div>
                        <div className="header__item">
                            <img
                                src="../public/images/icons/shopping-bag.png"
                                alt="Cart"
                                className="header__icon"
                            />
                            <div className="header__count" id="cart">
                                0
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
