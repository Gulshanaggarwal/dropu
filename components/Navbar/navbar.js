import { Header, Logo, LogoText, Wrapper, RoundedBox, AvatarWrapper } from './styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import logo from "../../public/logo.svg"
import Image from 'next/image';
import Hideview from '../HideView/hideview';
import Avatar from '@mui/material/Avatar';
import { useSession } from 'next-auth/react';
import UserMenu from '../Menu/userMenu';
import { useState } from 'react';



export default function Navbar({ mode, setMode }) {


    const { data: session, status } = useSession();
    const [anchorEl, setAnchorEl] = useState(null);


    const handleToggle = () => {
        if (mode === 'light') {
            setMode('dark');
            return;
        }
        setMode('light')

    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }



    return (
        <Hideview>
            <Header>
                <Logo>
                    <Image src={logo} width={30} height={30} alt="dropu_logo" />
                    <LogoText>Dropu</LogoText>
                </Logo>
                <Wrapper>
                    <Avatar sx={{ background: 'transparent', '&:hover': { backgroundColor: 'grey.500' } }}>
                        <LightModeIcon onClick={handleToggle} sx={{ cursor: 'pointer', color: 'text.primary' }} />
                        <UserMenu />
                    </Avatar>
                    {status === 'authenticated' && (<div>
                        <AvatarWrapper onClick={handleClick}>
                            <Avatar src={session.user.image} alt={session.user.name} />
                        </AvatarWrapper>
                        <UserMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
                    </div>)}
                </Wrapper>
            </Header>
        </Hideview>
    )
}