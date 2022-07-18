import { styled } from "@mui/system";


const UploadPageContainer = styled('div')(({ theme }) => ({
    padding: `${theme.spacing(4)} ${theme.spacing(16)}`,
    background: theme.palette.background.paper
}))

const ShareButton = styled('button')((props) => ({

    padding: `${props.theme.spacing(1)} ${props.theme.spacing(2)}`,
    borderRadius: '4px',
    color: props.theme.palette.common.white,
    backgroundColor: props.length > 0 ? props.theme.palette.primary.main : props.theme.palette.grey[500],
    float: 'right',
    border: 'none',
    cursor: props.length > 0 ? 'pointer' : 'not-allowed',


}))

export { UploadPageContainer, ShareButton }
// backgroundColor: (props) => props.length > 0 && theme.palette.primary.main,

