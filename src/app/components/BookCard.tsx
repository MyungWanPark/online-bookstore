import { Book } from "@/model/book";

type Props = {
    book: Book;
};

export default function BookCard({ book }: Props) {
    return <section>{book.content}</section>;
}
