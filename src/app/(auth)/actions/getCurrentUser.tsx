import Prisma from "../../../../lib/prismadb";

import getUserSession from "./getUserSessio";


const getCurrentUser = async () => {
    try {
        const session = await getUserSession()

        if (!session?.user?.email) {
            return null
        } 

        const currentUser = await Prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        })

        if (!currentUser) {
            return null
        }

        return currentUser
    } catch (error: any) {
        return null
    }
}

export default getCurrentUser;