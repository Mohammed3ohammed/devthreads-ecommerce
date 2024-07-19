"use server";

import prisma from "../../../../lib/prismadb";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";

export async function createUser(fromData: FormData) {
    try {
            const email = fromData.get("email") as string
            const name = fromData.get("name") as string
            const password  = fromData.get("password") as string
        try {
            const existingUser = await prisma.user. 
            findUnique({
                where: {email}
            })

            if (existingUser) {
                throw new Error("You are already a membe")
            }
                const hashedPassword = await bcrypt.hash(
                    password,
                    12
                )
                await prisma.user.create({
                    data: {
                        email:email,
                        name: name,
                        hashedPassword: hashedPassword
                    }
                })

                revalidatePath("/")
        } catch (existingUser) {
                return {
                    existingUser: "You are already a member, please sign in"
                }
        }
    } catch (error) {
        console.error(error)
    }
};