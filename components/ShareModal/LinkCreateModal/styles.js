import { styled } from "@mui/system"



const LinkGenerateModalContainer = styled('div')(({ theme }) => ({

    background: theme.palette.background.paper,
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    boxShadow: 24,
    padding: theme.spacing(4),
    borderRadius: '4px'

}))

const ContainerHeader = styled('div')(({ theme }) => ({

    display: 'flex',
    justifyContent: 'space-between',

}))

const ContainerTitle = styled('h4')(({ theme }) => ({

    color: theme.palette.text.primary,

}))


const ContainerMain = styled('div')(({ theme }) => ({

    padding: `${theme.spacing(2)} 0`
}))

const ContainerItem = styled('div')(({ theme }) => ({

    margin: `${theme.spacing(2)} 0`
}))

const ItemLabel = styled('label')(({ theme }) => ({

    color: theme.palette.text.primary,
    fontWeight: 'bold'
}))

const Item = styled('div')(({ theme }) => ({

    padding: `${theme.spacing(1)} 0`
}))

const SecurityButton = styled('div')(({ theme }) => ({

    padding: `${theme.spacing(1)} 0`,
    backgroundColor: theme.palette.grey[200],
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    cursor: 'pointer'
}))

const ButtonTitle = styled('span')(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: 'bold',
}))
export { LinkGenerateModalContainer, ContainerHeader, ContainerItem, ContainerMain, ContainerTitle, ItemLabel, Item, SecurityButton, ButtonTitle }