import Link from "next/link";

type Props = {
    page: number;
    totalPages: number;
    PaginationButtonArr: number[];
};

export default function PaginationButtons({
    page,
    totalPages,
    PaginationButtonArr,
}: Props) {
    return (
        <div className="flex justify-center items-center space-x-2 mt-4">
            {page > 1 && (
                <Link href={`?page=${page - 1}`}>
                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200">
                        이전
                    </button>
                </Link>
            )}

            {PaginationButtonArr.map((pageNum) => (
                <Link href={`?page=${pageNum}`} key={pageNum}>
                    <button
                        className={`
                            px-3 py-1 rounded transition-colors duration-200
                            ${
                                page === pageNum
                                    ? "font-bold hover:bg-gray-500 hover:text-white"
                                    : " text-gray-700 hover:bg-gray-500 hover:text-white"
                            }`}
                    >
                        {pageNum}
                    </button>
                </Link>
            ))}

            {page < totalPages && (
                <Link href={`?page=${page + 1}`}>
                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200">
                        다음
                    </button>
                </Link>
            )}
        </div>
    );
}
