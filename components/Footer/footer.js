import Link from "next/link"
import Hideview from "../HideView/hideview";
import { FooterContainer, Text } from "./styles";



export default function Footer() {
    return (
        <Hideview>
            <FooterContainer>
                <Text>
                    Made with 🖤 by &nbsp;
                    <Link href="https://gulshanaggarwal.github.io/portfolio/">
                        <a>Gulshan</a>
                    </Link>
                </Text>
            </FooterContainer>
        </Hideview>
    )
}