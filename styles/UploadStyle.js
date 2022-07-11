import { styled } from "@mui/system";


const UploadPageContainer = styled('div')(({ theme }) => ({
    padding: `${theme.spacing(4)} ${theme.spacing(16)}`,
    background: theme.palette.background.paper
}))

const ShareButton = styled('button')(({ theme }) => ({

    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    borderRadius: '4px',
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
    float: 'right',
    border: 'none',
    cursor: 'pointer',

}))

export { UploadPageContainer, ShareButton }