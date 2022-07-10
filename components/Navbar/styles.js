import { styled } from "@mui/system";

const Header = styled('div')(({ theme }) => ({

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing(2)} ${theme.spacing(16)}`,
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    backgroundColor: theme.palette.background.paper

}))



const Logo = styled('div')(({ theme }) => ({

    display: 'flex',
    gap: theme.spacing(2)

}));

const LogoText = styled('h1')(({ theme }) => ({

    color: theme.palette.text.primary
}))

const Wrapper = styled('div')({

    // display:'flex'

})

const RoundedBox = styled('div')(({ theme }) => ({
    borderRadius: '50%',
    padding: '0.2rem',
    '&:hover': {
        backgroundColor: theme.palette.grey[400]
    }
}))

export { Header, Logo, LogoText, Wrapper, RoundedBox };