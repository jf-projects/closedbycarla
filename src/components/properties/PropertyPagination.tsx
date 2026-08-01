"use client";

type Props = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export default function PropertyPagination({
    currentPage,
    totalPages,
    onPageChange,
}: Props) {
    const MAX_VISIBLE = 9;

    let startPage = Math.max(
        1,
        currentPage - Math.floor(MAX_VISIBLE / 2)
    );

    let endPage = startPage + MAX_VISIBLE - 1;

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(
            1,
            endPage - MAX_VISIBLE + 1
        );
    }

    const pages = [];

    for (
        let page = startPage;
        page <= endPage;
        page++
    ) {
        pages.push(page);
    }

    return (
        <section className="pt-16 pb-28">
            <div className="flex justify-center items-center gap-3">

                {/* Previous */}

                <button
                    onClick={() =>
                        onPageChange(currentPage - 1)
                    }
                    disabled={currentPage === 1}
                    className="
                        rounded-full
                        border
                        px-5
                        py-2
                        transition
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                        hover:bg-gray-100
                    "
                >
                    Previous
                </button>

                {/* Numbers */}

                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() =>
                            onPageChange(page)
                        }
                        className={`h-11 w-11 rounded-full transition ${currentPage === page
                                ? "bg-[#82B2C0] text-white"
                                : "bg-gray-100 hover:bg-gray-200"
                            }`}
                    >
                        {page}
                    </button>
                ))}

                {/* Next */}

                <button
                    onClick={() =>
                        onPageChange(currentPage + 1)
                    }
                    disabled={
                        currentPage === totalPages
                    }
                    className="
                        rounded-full
                        border
                        px-5
                        py-2
                        transition
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                        hover:bg-gray-100
                    "
                >
                    Next
                </button>

            </div>
        </section>
    );
}