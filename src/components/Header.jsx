import Burger from "./Burger";
import Logo from "./Logo";
import Menu from "./Menu";
import Nav from "./Nav";

import {useState} from "react";
import {headerItems} from "../data";

export default function Header({onChange}) {
    const [scrollPos, setScrollPos] = useState(0);

    window.addEventListener("scroll", () => setScrollPos(window.scrollY));

    return (
        <header
            className={scrollPos === 0 ? "header" : "header fixed"}
            id="header">
            <div className="container container--header">
                <div className="header__inner">
                    <div className="header__left">
                        <div className="header__menu">
                            <Burger />
                            <Logo />
                            <Menu />
                        </div>
                        <Nav onChange={onChange} />
                    </div>
                    <div className="header__right">
                        {headerItems.map((item) => {
                            return (
                                <div className="header__item" key={item.alt}>
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="header__icon"
                                        onClick={() => onChange(item.alt)}
                                    />
                                    {item.id ? (
                                        <div
                                            className="header__count"
                                            id={item.id}>
                                            0
                                        </div>
                                    ) : null}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </header>
    );
}
