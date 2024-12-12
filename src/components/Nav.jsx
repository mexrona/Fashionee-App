import ListLink from "./ListLink";
import {listLinksTitlePages} from "../data";
import {listLinksTitleShop} from "../data";

export default function Nav() {
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
                    <ListLink title={listLinksTitlePages[0].title} />
                    <ListLink title={listLinksTitlePages[1].title} />
                    <ListLink title={listLinksTitlePages[2].title} />
                    <ListLink title={listLinksTitlePages[3].title} />
                    <ListLink title={listLinksTitlePages[4].title} />
                    <ListLink title={listLinksTitlePages[5].title} />
                </ul>
            </div>
            <div className="nav__down">
                <a className="nav__link nav__link--list active" href="#">
                    Shop
                </a>
                <ul className="list">
                    <ListLink title={listLinksTitleShop[0].title} />
                    <ListLink title={listLinksTitleShop[1].title} />
                    <ListLink title={listLinksTitleShop[2].title} />
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
