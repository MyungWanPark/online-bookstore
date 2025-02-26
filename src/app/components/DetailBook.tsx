import { Book } from "@/model/book";
import Image from "next/image";
import StarRating from "./ui/StarRating";

type Props = {
    book: Book;
};

export default function DetailBook({
    book: { imageUrl, title, id, price, quantity, author, genre, content },
}: Props) {
    return (
        <section>
            <div>
                <Image src={imageUrl} alt={title} width={500} height={800} />
            </div>
            <div>
                <p>{title}</p>
                <p>저자: {author}</p>
                <StarRating rate={8} />
            </div>
        </section>
    );
}
