import Burger from "../Burger/Burger";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Nav from "../Nav/Nav";

import {useState, useEffect} from "react";
import {headerItems} from "../../data";

export default function Header({onChange, heartsCount, basketCount}) {
    const [scrollPos, setScrollPos] = useState(0);

    const changeScrollPos = () => setScrollPos(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", changeScrollPos);

        return () => window.removeEventListener("scroll", changeScrollPos);
    }, []);

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
                        {headerItems.map((item) => (
                            <div className="header__item" key={item.id}>
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="header__icon"
                                    onClick={() => onChange(item.alt)}
                                />
                                {item.hasCounter ? (
                                    <div className="header__count" id={item.id}>
                                        {item.id === "heart" ? (
                                            <>{heartsCount}</>
                                        ) : (
                                            <>{basketCount}</>
                                        )}
                                    </div>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
