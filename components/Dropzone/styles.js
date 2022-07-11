import { styled, textAlign } from "@mui/system"


const DropzoneContainer = styled('form')(({ theme }) => ({

    clear: 'right',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    position: 'relative',
    height: '3rem'

}))

const FileInput = styled('input')({
    opacity: 0

})
const LabelUpload = styled('label')(({ theme }) => ({
    borderRadius: '4px',
    border: `2px dashed ${theme.palette.grey[500]}`,
    display: 'block',
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    top: 0,
    padding: `${theme.spacing(2)} 0`,
    cursor: 'pointer'

}))
const Text = styled('p')(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: 'bold'
}))

const UploadButton = styled('button')(({ theme }) => ({

    background: 'none',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    padding: `${theme.spacing(2)} 0`,
    cursor: 'pointer',
    '&:hover': {
        textDecoration: 'underline',
    },
    color: theme.palette.text.primary
}))

const InvisibleElement = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
}))


export { DropzoneContainer, FileInput, LabelUpload, Text, UploadButton, InvisibleElement }