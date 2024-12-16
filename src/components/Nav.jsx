import ListLink from "./ListLink";

import {listLinksTitlePages} from "../data";
import {listLinksTitleShop} from "../data";

export default function Nav({onChange}) {
    return (
        <nav className="nav">
            <a className="nav__link" href="#">
                Home
            </a>
            <div className="nav__down">
                <a className="nav__link nav__link--list" href="#">
                    Pages
                </a>
                <ul className="list">
                    {listLinksTitlePages.map((link) => {
                        return (
                            <ListLink
                                title={link.title}
                                key={link.title}
                                onChange={onChange}
                            />
                        );
                    })}
                </ul>
            </div>
            <div className="nav__down">
                <a
                    className="nav__link nav__link--list active"
                    href="#"
                    onClick={() => onChange("Shop")}>
                    Shop
                </a>
                <ul className="list">
                    {listLinksTitleShop.map((link) => {
                        return (
                            <ListLink
                                title={link.title}
                                key={link.title}
                                onChange={onChange}
                            />
                        );
                    })}
                </ul>
            </div>
            <a className="nav__link" href="#">
                Blog
            </a>
            <a className="nav__link" href="#">
                Contact
            </a>
        </nav>
    );
}
