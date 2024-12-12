export default function Reviewed() {
    return (
        <div className="reviewed">
            <h2 className="sidebar__title">Reviewed By You</h2>
            <div className="reviewed__inner" id="reviewedProducts">
                <div className="reviewed__item">
                    <a className="reviewed__preview" href="#">
                        <img
                            className="reviewed__img"
                            src="/"
                            alt="Retro style handbag"
                        />
                    </a>
                    <div className="reviewed__info">
                        <a className="reviewed__name" href="#">
                            Retro style handbag
                        </a>
                        <div className="reviewed__price">
                            <span className="reviewed__new">&#36;35.99</span>
                            <span className="reviewed__old">&#36;52.99</span>
                        </div>
                    </div>
                </div>
                <div className="reviewed__item">
                    <a className="reviewed__preview" href="#">
                        <img
                            className="reviewed__img"
                            src="/"
                            alt="Warm casual sweater"
                        />
                    </a>
                    <div className="reviewed__info">
                        <a className="reviewed__name" href="#">
                            Warm casual sweater
                        </a>
                        <div className="reviewed__price">
                            <span className="reviewed__new">&#36;35.99</span>
                            <span className="reviewed__old"></span>
                        </div>
                    </div>
                </div>
                <div className="reviewed__item">
                    <a className="reviewed__preview" href="#">
                        <img
                            className="reviewed__img"
                            src="/"
                            alt="Textured turtleneck with zip"
                        />
                    </a>
                    <div className="reviewed__info">
                        <a className="reviewed__name" href="#">
                            Textured turtleneck with zip
                        </a>
                        <div className="reviewed__price">
                            <span className="reviewed__new">&#36;35.99</span>
                            <span className="reviewed__old"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
