export default function Intro({currentPage}) {
    return (
        <section className="intro">
            <div className="container container--intro">
                <div className="intro__inner">
                    <h1 className="intro__title">{currentPage}</h1>
                    <h2 className="intro__subtitle">
                        Home<span>Shop</span>
                        {currentPage === "Cart" && <span>Cart</span>}
                    </h2>
                    <div className="intro__img intro__img--dots">
                        <img src="../public/images/intro/dots.png" alt="Dots" />
                    </div>
                    <div className="intro__img intro__img--background">
                        <img
                            src="../public/images/intro/background.png"
                            alt="Background"
                        />
                    </div>
                </div>
            </div>
            <div className="intro__line"></div>
        </section>
    );
}
