import { Book } from "@/model/book";
import Link from "next/link";

type Props = {
    books: Book[];
};

export default function KeywordResult({ books }: Props) {
    return (
        <ul className="absolute top-12 left-80 bg-white">
            {books.map((book: Book) => (
                <li key={book.id}>
                    <Link href={`/book/${book.id}`}>
                        {book.title}:: {book.author}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
