import { styled } from "@mui/system"



const ModalItemContainer = styled('div')(({ theme }) => ({
    background: theme.palette.background.paper,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    boxShadow: 24,
    padding: theme.spacing(4),
    borderRadius: '1rem'

}))

const ModalHeaderContainer = styled('div')(({ theme }) => ({

    display: 'flex',
    justifyContent: 'space-between',

}))

const Heading = styled('h2')(({ theme }) => ({
    color: theme.palette.text.primary
}))

const SignInWrapper = styled('div')(({ theme }) => ({

    padding: `${theme.spacing(4)} 0`,

}))

const Text = styled('p')(({ theme }) => ({
    color: theme.palette.text.primary,
    padding: `${theme.spacing(1)} 0`
}))

const SignInButton = styled('button')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    padding: theme.spacing(1),
    border: `2px solid ${theme.palette.grey[300]}`,
    width: '100%',
    background: theme.palette.primary.light,
    cursor: 'pointer',
    borderRadius: '8px'

}))

const CompanyName = styled('span')(({ theme }) => ({

    fontSize: '1.2rem',
    color: theme.palette.common.white

}))

export { ModalItemContainer, ModalHeaderContainer, Heading, SignInWrapper, Text, SignInButton, CompanyName }