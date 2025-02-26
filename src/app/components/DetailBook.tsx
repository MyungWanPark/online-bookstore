"use client";

import { Book } from "@/model/book";
import Image from "next/image";
import StarRating from "./ui/StarRating";
import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import { useParams } from "next/navigation";

export default function DetailBook() {
    const { id } = useParams();
    const { data: book, isLoading, error } = useSWR<Book>(`/api/books/${id}`);
    const [isEditing, setIsEditing] = useState(false);
    const [editedBook, setEditedBook] = useState<Book | null>(null);

    useEffect(() => {
        if (book) {
            setEditedBook(book);
        }
    }, [book]);

    if (isLoading) return <div>로딩 중...</div>;
    if (!book || !editedBook) return <div>책 정보를 찾을 수 없습니다.</div>;

    const {
        imageUrl,
        title,
        price,
        quantity,
        author,
        genre,
        content,
        rate,
        publisher,
    } = book;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setEditedBook((prev) => (prev ? { ...prev, [name]: value } : prev));
    };

    const handleSave = async () => {
        const res = await fetch(`/api/books/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedBook),
        });

        if (res.ok) {
            const updatedBook = await res.json();
            mutate(`/api/books/${id}`, updatedBook, false);
            mutate("/api/books");
            setIsEditing(false);
        }
    };

    return (
        <section className="flex p-4">
            {isLoading && <div>로딩 중입니다...</div>}

            {book && (
                <>
                    <div>
                        <Image
                            src={imageUrl}
                            alt={title}
                            width={500}
                            height={800}
                        />
                    </div>
                    <div className="pl-4">
                        {!isEditing ? (
                            <p className="text-2xl font-bold">{title}</p>
                        ) : (
                            <input
                                className=""
                                value={editedBook.title}
                                name="title"
                                onChange={handleChange}
                            />
                        )}

                        <p>
                            저자:{" "}
                            {!isEditing ? (
                                <span>{author}</span>
                            ) : (
                                <input
                                    className=""
                                    value={editedBook.author}
                                    name="author"
                                    onChange={handleChange}
                                />
                            )}
                            <span> | </span>
                            {!isEditing ? (
                                <span>{publisher}</span>
                            ) : (
                                <input
                                    className=""
                                    value={editedBook.publisher}
                                    name="publisher"
                                    onChange={handleChange}
                                />
                            )}
                            <span> | </span>
                            장르:{" "}
                            {!isEditing ? (
                                <span>{genre}</span>
                            ) : (
                                <input
                                    className=""
                                    value={editedBook.genre}
                                    name="genre"
                                    onChange={handleChange}
                                />
                            )}
                        </p>
                        <div className="flex">
                            <StarRating rate={rate} />
                            {!isEditing ? (
                                <span className="ml-2 relative top-[2px]">
                                    {rate}
                                </span>
                            ) : (
                                <input
                                    className="w-5 relative top-[2px]"
                                    value={editedBook.rate}
                                    name="rate"
                                    onChange={handleChange}
                                />
                            )}
                            <span className="relative top-[2px]">점</span>
                        </div>
                        <div>
                            <p>
                                <span>정가: </span>
                                {!isEditing ? (
                                    <span>{price}</span>
                                ) : (
                                    <input
                                        className="w-12"
                                        value={editedBook.price}
                                        name="price"
                                        onChange={handleChange}
                                    />
                                )}
                                <span>원</span>
                            </p>
                            <p>
                                <span>판매가: </span>
                                <span>{price * 0.9}</span>원
                                <span>(10% 할인)</span>
                            </p>
                            <p>
                                <span>재고: </span>
                                {!isEditing ? (
                                    <span>{quantity}</span>
                                ) : (
                                    <input
                                        className="w-4"
                                        value={editedBook.quantity}
                                        name="quantity"
                                        onChange={handleChange}
                                    />
                                )}
                                <span>권</span>
                            </p>
                        </div>
                        <div>
                            <span>줄거리:</span>
                            {!isEditing ? (
                                <p>{content}</p>
                            ) : (
                                <textarea
                                    className="w-full border p-1 rounded h-20"
                                    value={editedBook.content}
                                    name="content"
                                    onChange={handleChange}
                                />
                            )}
                        </div>
                        <button
                            className="bg-blue-500 p-2 text-white rounded"
                            onClick={
                                !isEditing
                                    ? () => setIsEditing(true)
                                    : () => setIsEditing(false)
                            }
                        >
                            {!isEditing ? "수정" : "취소"}
                        </button>
                        {isEditing && (
                            <button
                                onClick={handleSave}
                                className="bg-blue-500 p-2 text-white rounded ml-2"
                            >
                                저장
                            </button>
                        )}
                    </div>
                </>
            )}
        </section>
    );
}
