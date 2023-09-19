import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/Ignite-Logo.svg'
import * as Dialog from "@radix-ui/react-dialog";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt=""></img>
                
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Novo Transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <Dialog.Portal>
                        <Dialog.Overlay />
                        <Dialog.Content>
                           <Dialog.Title>Nova Transação</Dialog.Title>
                           <Dialog.Close />
                           {/* <Dialog.Body>
                             <NewTransactionForm />
                           </Dialog.Body> */}
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
    
}