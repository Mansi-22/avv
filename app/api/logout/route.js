import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const response = NextResponse.json(
            {
                message: "Logout successful",
                success: true,
            }
        )
        response.cookies.set("token", "", 
        { httpOnly: true, expires: new Date(0) 
        });
        return response;
    } catch(err) {
        return NextResponse.json({message: "GET Error", err}, {status: 500})
    }
}