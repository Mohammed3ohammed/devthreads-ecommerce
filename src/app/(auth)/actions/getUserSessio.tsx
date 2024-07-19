import { getServerSession } from "next-auth";
import { authOptions } from "../api/[...nextauth]/action/rout";


export default async function getUserSession() {
    return await getServerSession(authOptions); 
} 