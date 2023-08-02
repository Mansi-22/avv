// url: http://localhost:3000/api/posts/12345
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export const GET = async (request, { params }) => {
    try {
        const { id } = params;

       
        const cuisine = await prisma.cuisine.findUnique({
            where: {
                id :id
            }
        });
           
        if (!cuisine) {
        return NextResponse.json(
            {message: "cuisine not found", err},
            {status: 404}
        )
        }

return NextResponse.json(cuisine);
    } catch(err) {
        return NextResponse.json({message: "GET Error", err}, {status: 500})
    }
}
