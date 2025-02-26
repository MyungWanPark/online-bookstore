"use client";

import { useState } from "react";
import BookCards from "./components/BookCards";
import PaginationButtons from "./components/PaginationButtons";
import useSWR from "swr";
import Navbar from "./components/Navbar";
import { useSearchParams } from "next/navigation";

function getPaginaionButtons(currentPage: number, totalPages: number) {
    const maxButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = startPage + maxButtons - 1;

    // 1,2 페이지에서는 1,2,3,4,5 표시
    if (currentPage <= Math.ceil(maxButtons / 2)) {
        startPage = 1;
        endPage = Math.min(totalPages, maxButtons);
    }

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxButtons + 1);
    }

    // 필요한 페이지 버튼의 숫자 배열을 리턴
    return Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
    );
}

export default function Home() {
    const searchParams = useSearchParams();
    const keyword = searchParams.get("q") || "";
    const [page, setPage] = useState(1);

    const apiUrl = keyword
        ? `/api/search?q=${keyword}&page=${page}`
        : `/api/books?page=${page}`;
    const { data, error } = useSWR(apiUrl);

    if (error) return <div>데이터를 불러오는 중 오류 발생</div>;
    if (!data) return <div>로딩 중...</div>;

    const books = data.books;
    const totalPages = data.totalPages;
    const PaginationButtonArr = getPaginaionButtons(page, totalPages);

    return (
        <div>
            <BookCards books={books} />
            <PaginationButtons
                page={page}
                totalPages={totalPages}
                PaginationButtonArr={PaginationButtonArr}
            />
        </div>
    );
}
