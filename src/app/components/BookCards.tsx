import { Book } from "@/model/book";
import BookCard from "./BookCard";

type Props = {
    books: Book[];
};

export default function BookCards({ books }: Props) {
    return (
        <section>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <BookCard book={book} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
