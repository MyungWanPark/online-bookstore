import { getAllBooks, getBookById } from "@/service/book";
import { NextRequest, NextResponse } from "next/server";

type Context = {
    params: {
        id: string;
    };
};

export async function GET(request: NextRequest, context: Context) {
    const { id } = context.params;
    return getBookById(id).then((data) => NextResponse.json(data));
}

export async function PUT(request: NextRequest, context: Context) {
    const { id } = context.params;
    const parsedId = parseInt(id, 10);
    const books = await getAllBooks();

    const updatedData = await request.json();
    books[parsedId] = {
        ...books[parsedId],
        ...updatedData,
    };

    return NextResponse.json(books[parsedId]);
}
