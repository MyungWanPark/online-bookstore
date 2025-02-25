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
        <div>
            {page > 1 && (
                <Link href={`?page=${page - 1}`}>
                    <button>이전</button>
                </Link>
            )}

            {PaginationButtonArr.map((pageNum) => (
                <Link href={`?page=${pageNum}`} key={pageNum}>
                    <button
                        className={`${
                            page === pageNum ? "font-bold" : "font-normal"
                        }`}
                    >
                        {pageNum}
                    </button>
                </Link>
            ))}

            {page < totalPages && (
                <Link href={`?page=${page + 1}`}>
                    <button>다음</button>
                </Link>
            )}
        </div>
    );
}
