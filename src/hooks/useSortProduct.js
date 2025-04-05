export const useSortProduct = () => {
    const sortProduct = (products, sort) => {
        const sortedProducts = products.toSorted((a, b) => {
            if (sort === "ASC") {
                if (a.name > b.name) return 1;
                if (a.name === b.name) return 0;
                if (a.name < b.name) return -1;
            }

            if (sort === "DESC") {
                if (a.name > b.name) return -1;
                if (a.name === b.name) return 0;
                if (a.name < b.name) return 1;
            }
        });

        return sortedProducts;
    };

    return {sortProduct};
};
