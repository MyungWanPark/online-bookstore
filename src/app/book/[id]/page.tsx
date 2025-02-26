"use client";

import DetailBook from "@/app/components/DetailBook";
import { Book } from "@/model/book";
import Image from "next/image";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function BookPage() {
    const { id } = useParams();
    const { data: book, isLoading, error } = useSWR<Book>(`/api/books/${id}`);

    return (
        <section>
            {isLoading && <div>로딩 중입니다...</div>}
            {book && <DetailBook book={book} />}
        </section>
    );
}
