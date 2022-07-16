import { useSession } from "next-auth/react";



export default function Hideview(props) {

    const { status } = useSession();

    if (status === 'loading') {
        return null
    }
    return props.children
}