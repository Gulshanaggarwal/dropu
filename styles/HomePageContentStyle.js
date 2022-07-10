import { styled } from "@mui/system";


const HomePageContentContainer = styled('div')(({ theme }) => ({

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: `${theme.spacing(6)} ${theme.spacing(16)}`,
    background: theme.palette.background.paper
}))

const LeftContainer = styled('div')({


})

const ProductLine = styled('h2')(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: '2rem'
}))

const QuestionLine = styled('p')(({ theme }) => ({
    color: theme.palette.text.primary,
    padding: `${theme.spacing(2)} 0`
}))


const Heading = styled('h3')(({ theme }) => ({
    color: theme.palette.text.primary
}))

const Wrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    padding: `${theme.spacing(2)} 0`
}))

const ServiceInstance = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(1.5),
    margin: `${theme.spacing(0.1)} 0`

}))

const Description = styled('p')(({ theme }) => ({
    color: theme.palette.text.primary
}))

const GetStartedButton = styled('button')(({ theme }) => ({
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: `${theme.spacing(2)} ${theme.spacing(8)}`,
    borderRadius: 32,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    border: 'none',
    margin: `${theme.spacing(2)} 0`,
    cursor: ' pointer',
    '&:hover': {
        background: theme.palette.primary.dark
    }
}))

const RightContainer = styled('div')({


})

const Logo = styled('div')({

})

export { HomePageContentContainer, LeftContainer, ProductLine, QuestionLine, GetStartedButton, Heading, Wrapper, ServiceInstance, Description, RightContainer, Logo }