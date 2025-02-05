import Navdown from "../Navdown/Navdown";

import {listLinksTitlePages, listLinksTitleShop} from "../../data";

export default function Nav({onChange}) {
    return (
        <nav className="nav">
            <a className="nav__link" href="#">
                Home
            </a>
            <Navdown
                onChange={onChange}
                info={listLinksTitlePages}
                title="Pages"
            />
            <Navdown
                onChange={onChange}
                info={listLinksTitleShop}
                title="Shop"
            />
            <a className="nav__link" href="#">
                Blog
            </a>
            <a className="nav__link" href="#">
                Contact
            </a>
        </nav>
    );
}
