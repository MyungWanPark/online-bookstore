"use client";

import { useState } from "react";
import useSWR from "swr";

type Props = {
    setKeyword: (k: string) => void;
};

export default function SearchInput({ setKeyword }: Props) {
    const [input, setInput] = useState("");
    const { data: realTimeData } = useSWR(`/api/search?q=${input}`);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setKeyword(input);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={input}
                onChange={handleInput}
                placeholder="please type here..."
            />
            <button type="submit">🔍</button>
        </form>
    );
}
