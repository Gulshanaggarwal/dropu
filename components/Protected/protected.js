import { useSession } from "next-auth/react"
import { useRouter } from "next/router";
import Spinner from "../../utils/Spinner/spinner";




export default function Protected(props) {

    const router = useRouter();
    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace("/");  // redirect to home page
        }
    })

    if (status === 'loading') {
        return <Spinner />
    }

    return props.children
}