import { Book } from "@/model/book";
import Image from "next/image";
import StarRating from "./ui/StarRating";

type Props = {
    book: Book;
};

export default function DetailBook({
    book: {
        imageUrl,
        title,
        id,
        price,
        quantity,
        author,
        genre,
        content,
        rate,
        publisher,
    },
}: Props) {
    return (
        <section className="flex">
            <div>
                <Image src={imageUrl} alt={title} width={500} height={800} />
            </div>
            <div>
                <p className="text-2xl font-bold">{title}</p>
                <p>
                    <span>저자: {author} | </span>
                    <span>{publisher} | </span>
                    <span>장르: {genre}</span>
                </p>
                <div className="flex">
                    <StarRating rate={rate} />
                    <span className="ml-2 relative top-[2px]">{rate}점</span>
                </div>
                <div>
                    <p>정가: {price}원</p>
                    <p>
                        판매가: <span>{price * 0.9}</span>원
                        <span>(10% 할인)</span>
                    </p>
                    <p>재고: {quantity}권</p>
                </div>
                <div>
                    <p>줄거리:</p>
                    <p>{content}</p>
                </div>
            </div>
        </section>
    );
}
