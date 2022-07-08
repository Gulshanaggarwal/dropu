import { Header, Logo, Wrapper, RoundedBox } from './styles';
import LightModeIcon from '@mui/icons-material/LightMode';




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
            <Logo>Dropu</Logo>
            <Wrapper>
                <RoundedBox>
                    <LightModeIcon onClick={handleToggle} sx={{ cursor: 'pointer', color: 'text.primary' }} />
                </RoundedBox>
            </Wrapper>
        </Header>
    )
}