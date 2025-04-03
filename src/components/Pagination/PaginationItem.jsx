export default function PaginationItem({id, activePage, setActivePage}) {
    const handleClick = () => {
        setActivePage(id);
    };

    return (
        <div className="pager__item">
            <div
                className={
                    id === activePage ? "pager__number active" : "pager__number"
                }
                onClick={() => handleClick()}>
                {id + 1}
            </div>
        </div>
    );
}
