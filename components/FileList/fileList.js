import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LocalStateContext } from '../../contexts/LocalStateContext';
import { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import useDelete from '../../hooks/useDelete';
import DeleteDialog from '../DeleteDialog/deleteDialog';




export default function FileList() {

    const [state, dispatch] = useContext(LocalStateContext);
    const { open, toggle } = useDelete();
    const { fileList } = state;


    return fileList.length > 0 ? (
        <TableContainer sx={{ margin: '5rem 0' }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">Type</TableCell>
                        <TableCell align="left">Size</TableCell>
                        <TableCell align="left"></TableCell>
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
                                    <DeleteIcon onClick={toggle} />
                                </IconButton>
                                <DeleteDialog open={open} toggle={toggle} dialogFor="file" id={file.id} dispatch={dispatch} />
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