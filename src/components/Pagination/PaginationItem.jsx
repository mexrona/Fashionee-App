export default function PaginationItem({id, activePage}) {
    return (
        <div className="pager__item">
            <div
                className={
                    activePage === id ? "pager__number active" : "pager__number"
                }>
                {id}
            </div>
        </div>
    );
}
