import BookCards from "./components/BookCards";

async function fetchBooks(page: number) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/books?page=${page}`,
        { cache: "no-store" }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch books");
    }

    return res.json();
}

export default async function Home() {
    const { books, totalPages } = await fetchBooks(1);

    return (
        <div>
            <BookCards />
        </div>
    );
}
