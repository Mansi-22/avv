import prisma from "@/app/libs/prismadb"
import { data } from "autoprefixer";
import { NextResponse } from "next/server"
import bcryptjs from 'bcryptjs';
import  jwt  from "jsonwebtoken"; 

export const POST = async (request) => {
    //console.log("i am here")
    try {
        const body = await request.json();
        const {name,address} = body;
        console.log(body.name);
        //finunique is best thing to use but for that if name used that should be unique field.
        //findFirst searches first value and ignores.
        const user = await prisma.Restaurants.findFirst({
            where: {
            //    resid: 2,
            name: body.name,
            }
        });  
         console.log(user); 
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

       //create token data
       const tokenData = {
           id: user.id,
           name: user.name,
           address: user.address
       }
       //create token
       const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1h"})

       const response = NextResponse.json({
           message: "Login successful",
           success: true,
       })
       response.cookies.set("token", token, {
           httpOnly: true, 
           
       })
       return response;


       // return NextResponse.json({message: "Login successful"},{status: 200});
    } catch(err) {
        return NextResponse.json({message: "Login Error", err}, {status: 500})
    }
}