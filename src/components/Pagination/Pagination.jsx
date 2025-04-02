import PaginationItem from "./PaginationItem";

export default function Pagination({
    activePage,
    handleClick,
    prevCondition,
    nextCondition,
    callBackFilter,
}) {
    return (
        <div className="pager" id="pager">
            <div
                className="pager__arrow pager__arrow--prev"
                id="pagerArrowPrev"
                onClick={() =>
                    handleClick(prevCondition, callBackFilter)
                }></div>
            <div className="pager__inner" id="pages">
                <PaginationItem id="1" activePage={activePage} />
                <PaginationItem id="2" activePage={activePage} />
                <PaginationItem id="3" activePage={activePage} />
            </div>
            <div
                className="pager__arrow pager__arrow--next"
                id="pagerArrowNext"
                onClick={() =>
                    handleClick(nextCondition, callBackFilter)
                }></div>
        </div>
    );
}
