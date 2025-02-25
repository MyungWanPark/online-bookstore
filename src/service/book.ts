import { faker } from "@faker-js/faker";

const BOOKS = Array.from({ length: 105 }, (_, i) => ({
    id: i + 1,
    title: faker.book.title,
    author: faker.book.author,
    genre: faker.book.genre,
    content: faker.lorem.words(30),
}));

export async function getAllBooks() {
    return BOOKS;
}
