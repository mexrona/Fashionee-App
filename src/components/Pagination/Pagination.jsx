import PaginationItem from "./PaginationItem";

export default function Pagination({setActivePage, countOfPages, activePage}) {
    const paginationItems = [];

    for (let i = 0; i < countOfPages; i++) {
        paginationItems.push({id: i});
    }

    const handlePrevClick = (prev) =>
        activePage !== 0 ? setActivePage(prev - 1) : setActivePage(activePage);

    const handleNextClick = (prev) =>
        activePage !== countOfPages - 1
            ? setActivePage(prev + 1)
            : setActivePage(activePage);

    return (
        <div className={countOfPages ? "pager" : "pager hide"} id="pager">
            <div
                className={
                    activePage !== 0
                        ? "pager__arrow pager__arrow--prev"
                        : "pager__arrow pager__arrow--prev no-active"
                }
                id="pagerArrowPrev"
                onClick={() => handlePrevClick(activePage)}></div>
            <div className="pager__inner" id="pages">
                {paginationItems.map((item) => (
                    <PaginationItem
                        key={item.id}
                        id={item.id}
                        activePage={activePage}
                        setActivePage={setActivePage}
                    />
                ))}
            </div>
            <div
                className={
                    activePage !== countOfPages - 1
                        ? "pager__arrow pager__arrow--next"
                        : "pager__arrow pager__arrow--next no-active"
                }
                id="pagerArrowNext"
                onClick={() => handleNextClick(activePage)}></div>
        </div>
    );
}
