"use client";

import { Book } from "@/model/book";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
import KeywordResult from "./KeywordResult";

type Props = {
    setKeyword: (k: string) => void;
};

export default function SearchInput({ setKeyword }: Props) {
    const [input, setInput] = useState("");
    const { data: realTimeData, isValidating } = useSWR(
        input.length > 0 ? `/api/search?q=${input}` : null,
        { keepPreviousData: true, fallbackData: [] }
    );

    const books = input.length > 0 ? realTimeData.books || [] : [];
    console.log("books = ", books);
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInput(e.target.value);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setKeyword(input);
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
