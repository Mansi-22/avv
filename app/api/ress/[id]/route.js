// url: http://localhost:3000/api/ress/12345
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export const GET = async (request, { params }) => {
    try {
        const { id } = params;
        const restaurant = await prisma.Restaurants.findUnique({
            where: {
                resid : parseInt(id)
            }
        });   
        if (!restaurant) {
            return NextResponse.json(
                {message: "restaurant not found", err},
                {status: 404}
            )
        }

    return NextResponse.json(restaurant);
        } catch(err) {
            return NextResponse.json({message: "GET it Error", err}, {status: 500})
        }
}

export const PATCH = async (request, {params}) => {
    try {
        const body = await request.json();
        const {name, description,address,resimage,cuis} = body;
        const {id} = params;
        const updateRestaurant = await prisma.Restaurants.update({
            where: {
                resid: parseInt(id)
            },
            data: {
                name,
                description
                ,address,resimage,cuis
            }
            })
        if (!updateRestaurant) {
            return NextResponse.json(
                {message: "Restaurant not found", err},
                {status: 404}
            )
        }
        return NextResponse.json(updateRestaurant);
    } catch(err) {
        return NextResponse.json({message: "update Error", err}, {status: 500})
    }
}

export const DELETE = async (request, { params }) => {
    try {
        const { id } = params;
        await prisma.Restaurants.delete({
            where: {
                resid : parseInt(id)
            }
        });   
        return NextResponse.json("Restaurant has beeen deleted");
    } catch(err) {
        return NextResponse.json({message: "DELETE Error", err}, {status: 500})
    }
}
