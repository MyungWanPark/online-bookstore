import { faker } from "@faker-js/faker";

const BOOKS = Array.from({ length: 105 }, (_, i) => ({
    id: i + 1,
    title: faker.book.title(),
    author: faker.book.author(),
    genre: faker.book.genre(),
    content: faker.lorem.words(30),
    imageUrl: `https://picsum.photos/seed/${i + 1}/300/200`,
}));

export async function getAllBooks() {
    return BOOKS;
}

export async function getBookById(id: string) {
    return BOOKS.find((book) => book.id === parseInt(id, 10));
}
