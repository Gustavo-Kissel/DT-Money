import { HeaderContainer, HeaderContent } from "./styles";
import logoImg from '../../assets/Ignite-Logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt=""></img>
                <button>Nova Transação</button>
            </HeaderContent>
        </HeaderContainer>
    )
    
}