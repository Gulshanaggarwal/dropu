import prisma from "../../lib/prisma";
import { authOptions } from "./auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";




export default async function CreateLink(req, res) {


    if (req.method === 'POST') {
        try {
            const session = await unstable_getServerSession(req, res, authOptions);
            if (session) {
                const { email: userId } = session.user;
                const { id, fileList, isPassword, password } = req.body;

                await prisma.Share.createMany({
                    data: {
                        id,
                        userId,
                        files: {
                            create: {
                                fileList,
                                shareId: id,
                            }
                        }
                    }
                })

            }


        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'error try again' })

        }
    }
    else {
        res.status(405).json({ message: 'Method not allowed' })
    }


}