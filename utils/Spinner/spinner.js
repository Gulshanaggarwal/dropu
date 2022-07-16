import CircularProgress from '@mui/material/CircularProgress';


export default function Spinner() {

    return (
        <CircularProgress sx={{ color: 'primary.main', position: 'absolute', top: '50%', left: '50%' }} />
    )
}