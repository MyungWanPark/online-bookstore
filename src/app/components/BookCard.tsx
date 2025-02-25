import { Book } from "@/model/book";
import Image from "next/image";
import Link from "next/link";

type Props = {
    book: Book;
};

export default function BookCard({ book }: Props) {
    return (
        <Link href={`/book/${book.id}`} className="bg-blue-300">
            <Image
                src={book.imageUrl}
                alt={book.title}
                width={500}
                height={300}
            />
            {book.title}
            <br />
            {book.author}
        </Link>
    );
}
