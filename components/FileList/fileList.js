import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { LocalStateContext } from '../../contexts/LocalStateContext';
import { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import useDelete from '../../hooks/useDelete';
import DeleteDialog from '../DeleteDialog/deleteDialog';


const style = {
    fontWeight: 'bold'
}


export default function FileList() {

    const [state, dispatch] = useContext(LocalStateContext);
    const { open, currentId, toggle } = useDelete();
    const { fileList } = state;



    return fileList.length > 0 ? (
        <TableContainer sx={{ margin: '5rem 0' }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={style}>Name</TableCell>
                        <TableCell sx={style} align="left">Type</TableCell>
                        <TableCell sx={style} align="left">Size</TableCell>
                        <TableCell sx={style} align="left"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fileList.map((file) => (
                        <TableRow
                            key={file.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {file.name}
                            </TableCell>
                            <TableCell align="left">{file.contentType}</TableCell>
                            <TableCell align="left">{file.size}</TableCell>
                            <TableCell align="left">
                                <IconButton>
                                    <DeleteIcon onClick={() => toggle(file.id)} />
                                </IconButton>
                                {currentId === file.id && <DeleteDialog open={open} toggle={toggle} dialogFor="file" id={file.id} dispatch={dispatch} />}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    ) : (
        <p>Start Uploading now...</p>
    )
}