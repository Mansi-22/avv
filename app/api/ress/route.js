// url: http://localhost:3000/api/ress
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        const posts = await prisma.Restaurants.findMany()
        return NextResponse.json(posts);
    } catch(err) {
        return NextResponse.json({message: "GET Error", err}, {status: 500})
    }
}

export const POST = async (request) => {
    try {
        const body = await request.json();
        const {name, description,address,resimage,cuis} = body;
        const newPost = await prisma.Restaurants.create({
            data: {
                name,
                description,
                address,
                resimage,
                cuis
            }
        })
        return NextResponse.json(newPost);
    } catch(err) {
        return NextResponse.json({message: "Restaurants Error", err}, {status: 500})
    }
}