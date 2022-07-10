import { styled } from "@mui/system";


const FooterContainer = styled('footer')(({ theme }) => ({

    textAlign: ' center',
    backgroundColor: theme.palette.background.paper,
    borderTop: `1px solid ${theme.palette.grey[200]}`,
    padding: `${theme.spacing(2)} 0`
}));

const Text = styled('p')(({ theme }) => ({

    color: theme.palette.text.primary

}));


export { FooterContainer, Text }