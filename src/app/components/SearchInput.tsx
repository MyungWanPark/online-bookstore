"use client";

import { Book } from "@/model/book";
import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";
import KeywordResult from "./KeywordResult";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchInput() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [input, setInput] = useState(searchParams.get("q") || "");
    const [books, setBooks] = useState([]);
    const { data: realTimeData, error } = useSWR(
        input.length > 0 ? `/api/search?q=${input}` : null
    );

    useEffect(() => {
        if (input.length === 0) {
            setBooks([]);
            return;
        }
        if (realTimeData && realTimeData.books) {
            setBooks(realTimeData.books);
            return;
        }
    }, [realTimeData]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInput(e.target.value);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        setBooks([]);
        router.push(`/?q=${input}`);
    };

    return (
        <>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={input}
                    onChange={handleInput}
                    placeholder="please type here..."
                />
                <button type="submit">🔍</button>
            </form>
            {books && books.length > 0 && <KeywordResult books={books} />}
        </>
    );
}
