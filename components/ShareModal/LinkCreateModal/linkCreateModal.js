import CloseIcon from '@mui/icons-material/Close';
import { Modal, FormControl, InputLabel, Select, MenuItem, IconButton, OutlinedInput, InputAdornment, Visibility, VisibilityOff } from "@mui/material"
import { useState } from "react";
import { LinkGenerateModalContainer, ContainerHeader, ContainerItem, ContainerMain, ContainerTitle, ItemLabel, Item, SecurityButton, ButtonTitle } from "./styles"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

export default function LinkCreateModal({ open, setLinkCreateModal }) {


    const [expiry, setExpiry] = useState('10 Minute');
    const [expand, setExpand] = useState(false);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

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
        setShowPassword(true);
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
                        <Item>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Expiration</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={expiry}
                                    label="expiry"
                                    onChange={handleExpiryChange}
                                >
                                    <MenuItem value="10 Minute">10 Minute</MenuItem>
                                    <MenuItem value="1 Hour">1 Hour</MenuItem>
                                    <MenuItem value="3 Hour">3 Hour</MenuItem>
                                    <MenuItem value="1 Day">1 Day</MenuItem>
                                    <MenuItem value="1 Week">1 Week</MenuItem>
                                    <MenuItem value="1 Month">1 Month</MenuItem>
                                </Select>
                            </FormControl>
                        </Item>
                    </ContainerItem>
                    <ContainerItem>
                        <SecurityButton onClick={() => setExpand(!expand)}>
                            {expand ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                            <ButtonTitle>Security</ButtonTitle>
                        </SecurityButton>
                        <ContainerItem>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={handlePasswordChange}
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
                                    label="Password"
                                />
                            </FormControl>
                        </ContainerItem>
                    </ContainerItem>
                </ContainerMain>
            </LinkGenerateModalContainer>
        </Modal>
    )
}