import { Book } from "@/model/book";
import { faker } from "@faker-js/faker";

// 검색창 테스트용 책 제목
const commonTitles = [
    "Shadow",
    "Light",
    "Dream",
    "Storm",
    "Echo",
    "Whisper",
    "Fire",
    "Secret",
    "Legend",
    "Destiny",
];

// 검색창 테스트용 저자 이름
const commonAuthors = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
];

const getRandomElement = (arr: string[]) =>
    arr[Math.floor(Math.random() * arr.length)];

const getRandomPrice = () => {
    const number = faker.commerce.price({ min: 10, max: 20, dec: 0 });
    const parsedNum = parseInt(number, 10);
    return parsedNum * 1000;
};

const BOOKS = Array.from({ length: 105 }, (_, i) => ({
    id: i,
    title: `${getRandomElement(commonTitles)} ${faker.book.title()}`,
    author: `${getRandomElement(commonAuthors)} ${faker.book.author()}`,
    genre: faker.book.genre(),
    content: faker.lorem.words(30),
    price: getRandomPrice(),
    quantity: faker.number.int(100),
    publisher: faker.book.publisher(),
    rate: faker.number.int({ min: 2, max: 10 }),
    imageUrl: `https://picsum.photos/seed/${i + 1}/300/200`,
}));

export async function getAllBooks() {
    return BOOKS;
}

export async function getBookById(id: number) {
    return BOOKS.find((book) => book.id === id);
}

export async function updateBookById(id: number, updatedData: Book) {
    const books = await getAllBooks();
    const index = books.findIndex((book) => book.id === id);

    books[index] = {
        ...books[index],
        ...updatedData,
    };

    return books[index];
}

export async function deleteBookById(id: number) {
    const books = await getAllBooks();
    const index = books.findIndex((book) => book.id === id);

    books.splice(index, 1);

    return books;
}
