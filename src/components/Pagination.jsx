export default function Pagination() {
    return (
        <div className="pager" id="pager">
            <div
                className="pager__arrow pager__arrow--prev"
                id="pagerArrowPrev"></div>
            <div className="pager__inner" id="pages">
                <div className="pager__item">
                    <div className="pager__number active">1</div>
                </div>
                <div className="pager__item">
                    <div className="pager__number">2</div>
                </div>
                <div className="pager__item">
                    <div className="pager__number">3</div>
                </div>
            </div>
            <div
                className="pager__arrow pager__arrow--next"
                id="pagerArrowNext"></div>
        </div>
    );
}
