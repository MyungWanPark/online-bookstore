import { Book } from "@/model/book";
import BookCard from "./BookCard";

type Props = {
    books: Book[];
};

export default function BookCards({ books }: Props) {
    return (
        <section>
            <ul className="grid grid-cols-4 gap-4">
                {books.map((book) => (
                    <li key={book.id}>
                        <BookCard book={book} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
