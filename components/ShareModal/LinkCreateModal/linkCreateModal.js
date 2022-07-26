import CloseIcon from '@mui/icons-material/Close';
import { Modal, FormControl, InputLabel, Select, MenuItem, IconButton, OutlinedInput, InputAdornment } from "@mui/material"
import { useState } from "react";
import { LinkGenerateModalContainer, ContainerHeader, ContainerItem, ContainerMain, ContainerTitle, ItemLabel, SecurityButton, ButtonTitle, GenerateButton } from "./styles"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useMutation } from '@tanstack/react-query';
import { nanoid } from 'nanoid';

export default function LinkCreateModal({ open, setLinkCreateModal, fileList }) {


    const [expiry, setExpiry] = useState('10 Minute');
    const [expand, setExpand] = useState(false);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const mutation = useMutation((body) => {
        return fetch('/create-link', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    })
    const handleExpiryChange = (e) => {
        setExpiry(e.target.value);
    }

    const handleClose = () => {
        setLinkCreateModal(false);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value.trim());
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }


    const handleCreateLink = async () => {
        mutation.mutate({ id: nanoid(5), fileList, expiry, isPassword: password === "" ? false : true, password })

    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-Link-Create"
            aria-describedby="modal-Generate-Your Link-Here">
            <LinkGenerateModalContainer>
                <ContainerHeader>
                    <ContainerTitle>
                        Share
                    </ContainerTitle>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </ContainerHeader>
                <ContainerMain>
                    <ContainerItem>
                        <ItemLabel>
                            Expiration
                        </ItemLabel>
                        <FormControl fullWidth>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={expiry}
                                label="expiry"
                                onChange={handleExpiryChange}
                                input={<OutlinedInput />}
                            >
                                <MenuItem value="10 Minute">10 Minute</MenuItem>
                                <MenuItem value="1 Hour">1 Hour</MenuItem>
                                <MenuItem value="3 Hour">3 Hour</MenuItem>
                                <MenuItem value="1 Day">1 Day</MenuItem>
                                <MenuItem value="1 Week">1 Week</MenuItem>
                                <MenuItem value="1 Month">1 Month</MenuItem>
                            </Select>
                        </FormControl>
                    </ContainerItem>
                    <ContainerItem>
                        <SecurityButton onClick={() => setExpand(!expand)}>
                            {expand ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                            <ButtonTitle>Advanced Security (Optional)</ButtonTitle>
                        </SecurityButton>
                        {
                            expand && <ContainerItem>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={handlePasswordChange}
                                        label="Password"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={(e) => e.preventDefault()}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </ContainerItem>
                        }
                    </ContainerItem>
                </ContainerMain>
                <GenerateButton onClick={handleCreateLink}>Generate Link</GenerateButton>
            </LinkGenerateModalContainer>
        </Modal>
    )
}