import Image from "next/image"
import logo from "../public/logo.svg"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { HomePageContentContainer, LeftContainer, ProductLine, QuestionLine, GetStartedButton, Heading, Wrapper, ServiceInstance, Description, RightContainer, Logo } from "../styles/HomePageContentStyle"
import { useState } from "react";
import LoginModal from "../components/LoginModal/loginModal";

export default function Home() {

  const [loginModal, setLoginModal] = useState(false);


  return (
    <HomePageContentContainer>
      <LeftContainer>
        <ProductLine>
          Now more secure access to your files,<br />
          than drive
        </ProductLine>
        <QuestionLine>
          Do you fee worry while giving access file link to the <br />
          third parties?<br />
          That's the reason we exists 😎
        </QuestionLine>
        <div>
          <Heading>Features -</Heading>
          <Wrapper>
            <ServiceInstance>
              <CheckCircleIcon sx={{ color: 'primary.main' }} />
              <Heading>Protected -</Heading>
              <Description>
                Time limit &#38; password protected file links
              </Description>
            </ServiceInstance>
            <ServiceInstance>
              <CheckCircleIcon sx={{ color: 'primary.main' }} />
              <Heading>Access multiple -</Heading>
              <Description>
                Multiple files access via single link, preview &#38; download
              </Description>
            </ServiceInstance>
            <ServiceInstance>
              <CheckCircleIcon sx={{ color: 'primary.main' }} />
              <Heading>SignIn -</Heading>
              <Description>
                No need to register, easy sign in with Google
              </Description>
            </ServiceInstance>
          </Wrapper>
        </div>
        <div>
          <GetStartedButton onClick={() => setLoginModal(true)}>
            Get Started
          </GetStartedButton>
          <LoginModal open={loginModal} setLoginModal={setLoginModal} />
        </div>
      </LeftContainer>
      <RightContainer>
        <Logo>
          <Image src={logo} width={100} height={100} alt="dropu_logo" />
        </Logo>
      </RightContainer>
    </HomePageContentContainer>
  )
}
