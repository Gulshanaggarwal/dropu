import { Modal } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { ModalItemContainer, ModalHeaderContainer, Heading, SignInWrapper, Text, SignInButton, CompanyName } from "./styles";
import { signIn } from "next-auth/react";


export default function LoginModal({ open, setLoginModal }) {

    const handleClose = () => {
        setLoginModal(false);
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-login"
            aria-describedby="modal-modal-sign-in-with-google">
            <ModalItemContainer>
                <ModalHeaderContainer>
                    <Heading>Welcome to SignIn 🤩</Heading>
                    <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer', color: 'text.primary' }} />
                </ModalHeaderContainer>
                <SignInWrapper>
                    <Text>Sign In using </Text>
                    <SignInButton onClick={() => signIn()}>
                        {/* Google Icon */}
                        <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <CompanyName>Google</CompanyName>
                    </SignInButton>
                </SignInWrapper>
            </ModalItemContainer>
        </Modal>
    )
}