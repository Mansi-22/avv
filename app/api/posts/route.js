// url: http://localhost:3000/api/posts
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try {
        const body = await request.json();
        const {name, description} = body;

        const newPost = await prisma.post.create({
            data: {
                name,
                description
            }
        })

        return NextResponse.json(newPost);
    } catch(err) {
        return NextResponse.json({message: "Cuisine Error", err}, {status: 500})
    }
}

