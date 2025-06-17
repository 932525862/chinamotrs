import { useState } from "react";

const PaginationComponent = ({ totalPages = 10 }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (page) => {
        if (page === "...") return;
        setCurrentPage(page);
    };

    const getPageNumbers = () => {
        const pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, "...", totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, "...", currentPage, "...", totalPages);
            }
        }
        return pages;
    };

    return (
        <div className="mt-12 flex items-center justify-center">
            <div className="flex flex-wrap items-center gap-2">
                {/* Previous */}
                <button
                    disabled={currentPage === 1}
                    onClick={() => handleClick(currentPage - 1)}
                    className="relative group border-[2px] border-green-500 overflow-hidden rounded-full px-4 py-2 text-sm text-green-500 disabled:opacity-40"
                >
                    <span className="relative z-10">Previous</span>
                    <span className="absolute inset-0 bg-green-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0" />
                </button>

                {/* Page Numbers */}
                {getPageNumbers().map((page, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(page)}
                        disabled={page === "..."}
                        className={`relative group overflow-hidden rounded-full px-4 py-2 text-sm transition-all ${page === currentPage
                            ? "bg-green-500 text-white"
                            : "border-[2px] border-green-500 text-green-500 hover:text-white"
                            } ${page === "..." ? "cursor-default" : "cursor-pointer"}`}
                    >
                        <span className="relative z-10">{page}</span>
                        {page !== currentPage && page !== "..." && (
                            <span className="absolute inset-0 bg-green-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0" />
                        )}
                    </button>
                ))}

                {/* Next */}
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => handleClick(currentPage + 1)}
                    className="relative group border-[2px] border-green-500 overflow-hidden rounded-full px-4 py-2 text-sm text-green-500 disabled:opacity-40"
                >
                    <span className="relative z-10">Next</span>
                    <span className="absolute inset-0 bg-green-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0" />
                </button>
            </div>
        </div>
    );
};

export default PaginationComponent;
