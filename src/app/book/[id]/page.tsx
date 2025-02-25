"use client";

import { Book } from "@/model/book";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function BookPage() {
    const { id } = useParams();
    const { data: book, isLoading, error } = useSWR<Book>(`/api/books/${id}`);

    return <section>{book?.id} 페이지 입니다.</section>;
}
