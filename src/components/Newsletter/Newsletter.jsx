export default function Newsletter() {
    return (
        <section className="newsletter">
            <div className="container container--newsletter">
                <div className="newsletter__inner">
                    <div className="newsletter__block">
                        <div className="newsletter__item">
                            <h3 className="newsletter__title">Newsletter</h3>
                            <p className="newsletter__text">
                                Be the first to hear about deals, offers and
                                upcoming collections.
                            </p>
                            <form action="/" method="get">
                                <div className="newsletter__input">
                                    <div className="input input--newsletter">
                                        <label>
                                            <input
                                                className="input__item"
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email"
                                            />
                                        </label>
                                    </div>
                                    <button
                                        className="button button--newsletter"
                                        type="submit">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                            <img
                                className="newsletter__img"
                                src="../public/images/small-dots.png"
                                alt="Img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
