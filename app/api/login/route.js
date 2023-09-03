import prisma from "@/app/libs/prismadb"
import { data } from "autoprefixer";
import { NextResponse } from "next/server"
import bcryptjs from 'bcryptjs';

export const POST = async (request) => {
    //console.log("i am here")
    try {
        const body = await request.json();
        const {name,address} = body;
        //console.log(body.name);
        const user = await prisma.Restaurants.findUnique({
            where: {
               resid: 2,
            }
        });  
        // console.log(user); 
        // console.log(body.name);
        // console.log(user.name);
        if (body.name != user.name) {
            console.log("name not matched")
            return NextResponse.json(
                {error: "user is not admin"},
                {status: 404}
            )
        }
        console.log("user exists");
        //check if password is correct
        if (body.address != user.address) {
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }

        // const validPassword = await bcryptjs.compare(body.address, user.address)
        // if(!validPassword){
        //     return NextResponse.json({error: "Invalid password"}, {status: 400})
        // }
       // console.log(user);
        return NextResponse.json({message: "Login successful"},{status: 200});
    } catch(err) {
        return NextResponse.json({message: "Login Error", err}, {status: 500})
    }
}