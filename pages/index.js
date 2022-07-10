import Image from "next/image"
import logo from "../public/logo.svg"
import { HomePageContentContainer, LeftContainer, ProductLine, QuestionLine, GetStartedButton, RightContainer, Logo } from "../styles/HomePageContentStyle"

export default function Home() {
  return (
    <HomePageContentContainer>
      <LeftContainer>
        <ProductLine>
          Now more secure access to your files,<br />
          than drive
        </ProductLine>
        <QuestionLine>
          Do you really want to give your personal files in the hand of third<br />
          partieslike WeTransfer?
        </QuestionLine>
        <GetStartedButton>
          Get Started
        </GetStartedButton>
      </LeftContainer>
      <RightContainer>
        <Logo>
          <Image src={logo} width={100} height={100} />
        </Logo>
      </RightContainer>
    </HomePageContentContainer>
  )
}
