import {footerListAbout, footerListUseful} from "../data";
import Logo from "./Logo";
import Socials from "./Socials";
import Copyright from "./Copyright";
import Payment from "./Payment";

export default function Footer() {
    return (
        <footer className="footer footer--shop">
            <div className="container container--footer">
                <div className="footer__inner">
                    <div className="footer__block footer__block--1">
                        <div className="footer__column footer__column--1">
                            <Logo />
                            <p className="footer__text footer__text--1">
                                Cillum eu id enim aliquip aute ullamco.
                                <br />
                                Culpa deserunt nostrud excepteur voluptate.
                            </p>
                            <Socials />
                        </div>
                        <div className="footer__column footer__column--2">
                            <div className="footer__item">
                                <h5 className="footer__title">About</h5>
                                <div className="footer__list">
                                    {footerListAbout.map((link) => {
                                        return (
                                            <a
                                                className="footer__text footer__text--link"
                                                href="#"
                                                key={link.title}>
                                                {link.title}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="footer__column footer__column--3">
                            <div className="footer__item">
                                <h5 className="footer__title">Useful Links</h5>
                                <div className="footer__list">
                                    {footerListUseful.map((link) => {
                                        return (
                                            <a
                                                className="footer__text footer__text--link"
                                                href="#"
                                                key={link.title}>
                                                {link.title}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="footer__column footer__column--4">
                            <h5 className="newsletter__title newsletter__title--footer">
                                Newsletter
                            </h5>
                            <p className="newsletter__text">
                                Subscribe to be the first to hear about deals,
                                offers and upcoming collections.
                            </p>
                            <div className="input input--footer">
                                <form action="/" method="get">
                                    <label>
                                        <input
                                            className="input__item"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email"
                                        />
                                    </label>
                                    <img
                                        className="input__icon input__icon--send"
                                        type="submit"
                                        src="../public/images/icons/send.png"
                                        alt="Send"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="footer__block footer__block--2">
                        <Copyright />
                        <Payment />
                    </div>
                </div>
                <img
                    className="footer__img footer__img--small"
                    src="../public/images/small-dots.png"
                    alt="Img"
                />
                <img
                    className="footer__img footer__img--big"
                    src="../public/images/footer.png"
                    alt="Img"
                />
            </div>
        </footer>
    );
}
