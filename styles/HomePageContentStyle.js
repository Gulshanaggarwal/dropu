import { styled } from "@mui/system";


const HomePageContentContainer = styled('div')(({ theme }) => ({

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: `${theme.spacing(8)} ${theme.spacing(16)}`,
    background: theme.palette.background.paper
}))

const LeftContainer = styled('div')({


})

const ProductLine = styled('h2')(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: '2rem'
}))

const QuestionLine = styled('p')(({ theme }) => ({
    color: theme.palette.grey[500],
    padding: `${theme.spacing(2)} 0`
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
    cursor: ' pointer'
}))

const RightContainer = styled('div')({


})

const Logo = styled('div')({

})

export { HomePageContentContainer, LeftContainer, ProductLine, QuestionLine, GetStartedButton, RightContainer, Logo }