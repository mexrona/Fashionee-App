export const usePagination = () => {
    const paginateCount = (callBackOne, callBackTwo, key) => {
        if (!callBackOne(key)) {
            callBackTwo(key, `24`);
        }

        if (callBackOne(key)) {
            callBackTwo(key, `${Number(callBackOne(key)) + 12}`);
        }
    };

    const createPagination = (productsCount, paginationInfo, checkFavorite) => {
        const jsPages = document.getElementById("pages");
        const pager = document.getElementById("pager");

        if (!productsCount) {
            pager.classList.add("hide");

            return;
        }

        if (!jsPages) {
            return;
        }

        pager.classList.remove("hide");

        jsPages.innerHTML = "";

        const pageCount = Math.ceil(productsCount / paginationInfo.perPage);

        for (let i = 0; i < pageCount; i++) {
            const pagerItem = document.createElement("div");
            pagerItem.classList.add("pager__item");
            jsPages.appendChild(pagerItem);

            const pagerNumber = document.createElement("div");
            pagerNumber.classList.add("pager__number");

            if (i === paginationInfo.activePage) {
                pagerNumber.classList.add("active");
            }

            pagerNumber.innerHTML = i + 1;
            pagerNumber.dataset.index = i;

            const pagerNumbers = document.querySelectorAll(".pager__number");

            pagerNumber.addEventListener("click", (event) => {
                paginateCount();

                const currentElement = event.target;

                pagerNumbers.forEach((element) => {
                    element.classList.remove("active");
                });

                currentElement.classList.add("active");

                paginationInfo.activePage = Number(
                    currentElement.dataset.index
                );

                const {filteredProducts, productsCount} = filterProducts(
                    searchValue,
                    oldFilter,
                    sort,
                    paginationInfo
                );

                createProductList(filteredProducts, productsCount);
                checkFavorite();
            });

            if (
                pagerNumber.dataset.index === "0" &&
                pagerNumber.classList.contains("active")
            ) {
                pagerArrowPrev.classList.add("no-active");
            }

            if (
                pagerNumber.dataset.index === "0" &&
                !pagerNumber.classList.contains("active")
            ) {
                pagerArrowPrev.classList.remove("no-active");
            }

            if (
                pagerNumber.dataset.index === String(pagerNumbers.length) &&
                pagerNumber.classList.contains("active")
            ) {
                pagerArrowNext.classList.add("no-active");
            }

            if (
                pagerNumber.dataset.index === String(pagerNumbers.length) &&
                !pagerNumber.classList.contains("active")
            ) {
                pagerArrowNext.classList.remove("no-active");
            }

            pagerItem.appendChild(pagerNumber);
        }
    };

    const paginateProducts = (products, paginInfo) => {
        const productsCount = products.length;

        const {activePage, perPage} = paginInfo;

        const firstIndex = activePage * perPage;
        const paginatedProducts = products.slice(
            firstIndex,
            (activePage + 1) * perPage
        );

        return {
            productsCount,
            paginatedProducts,
        };
    };

    return {paginateCount, createPagination, paginateProducts};
};
