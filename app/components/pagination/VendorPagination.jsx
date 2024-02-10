
const renderPagination = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const maxPagesToShow = 6; // Show only the first 6 pages

    const firstPageInList = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const lastPageInList = Math.min(totalPages, firstPageInList + maxPagesToShow - 1);

    const pagination = [];

    for (let i = firstPageInList; i <= lastPageInList; i++) {
        pagination.push(
            <button
                key={i}
                className={currentPage === i ? 'active' : ''}
                onClick={() => setCurrentPage(i)}
            >
                {i}
            </button>
        );
    }

    return <div className="pagination">{pagination}</div>;
};
