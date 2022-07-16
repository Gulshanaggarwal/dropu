import { Menu, MenuItem, Typography } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import LinkIcon from '@mui/icons-material/Link';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/router';
import { border } from '@mui/system';

export default function UserMenu({ anchorEl, setAnchorEl }) {

    const router = useRouter();
    const { pathname } = router;
    const open = Boolean(anchorEl);

    const handleClose = (e) => {
        setAnchorEl(null)
    }

    return (
        <Menu
            id="user-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}

        >
            <MenuItem onClick={handleClose} sx={
                pathname === "/upload" && [
                    (theme) => ({
                        borderLeft: `2px solid ${theme.palette.primary.main}`,
                        backgroundColor: theme.palette.grey[100]
                    })
                ]
            }>
                <FileUploadIcon />
                <Typography sx={{ padding: '0 0.5rem' }}>Upload</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={
                pathname === "/shares" && [
                    (theme) => ({
                        borderLeft: `2px solid ${theme.palette.primary.main}`,
                        backgroundColor: theme.palette.grey[100]
                    })
                ]
            }>
                <LinkIcon />
                <Typography sx={{ padding: '0 0.5rem' }}>Shares</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <LogoutIcon />
                <Typography sx={{ padding: '0 0.5rem' }}>Logout</Typography>
            </MenuItem>
        </Menu >
    )
}