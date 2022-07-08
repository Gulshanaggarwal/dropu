import Link from "next/link"
import { FooterContainer, Text } from "./styles";



export default function Footer() {
    return (
        <FooterContainer>
            <Text>
                Made with 🖤 by
                <Link href="https://gulshanaggarwal.github.io/portfolio/">
                    <a>Gulshan</a>
                </Link>
            </Text>
        </FooterContainer>
    )
}