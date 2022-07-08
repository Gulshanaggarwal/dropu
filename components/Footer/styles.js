import { styled } from "@mui/system";


const FooterContainer = styled('footer')(({ theme }) => ({

    textAlign: ' center',
    backgroundColor: theme.palette.background.paper
}));

const Text = styled('p')(({ theme }) => ({

    color: theme.palette.text.primary

}));


export { FooterContainer, Text }