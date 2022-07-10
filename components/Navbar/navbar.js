import { Header, Logo, LogoText, Wrapper, RoundedBox } from './styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import logo from "../../public/logo.svg"
import Image from 'next/image';




export default function Navbar({ mode, setMode }) {




    const handleToggle = () => {
        if (mode === 'light') {
            setMode('dark');
            return;
        }
        setMode('light')

    }



    return (
        <Header>
            <Logo>
                <Image src={logo} width={30} height={30} alt="dropu_logo" />
                <LogoText>Dropu</LogoText>
            </Logo>
            <Wrapper>
                <RoundedBox>
                    <LightModeIcon onClick={handleToggle} sx={{ cursor: 'pointer', color: 'text.primary' }} />
                </RoundedBox>
            </Wrapper>
        </Header>
    )
}