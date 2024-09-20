import { ModalContext } from "@/context/modal"
import { ReactElement, useState } from "react"


export const ModalProvider = ({ children }: { children: any }) => {
    const [modal_state, setModalStateLocal] = useState<boolean>(false);
    const [modal_content, setModalContentLocal] = useState<ReactElement>(<></>);

    const setModalState = (state: boolean) => {
        setModalStateLocal(state);
    }

    const setModalContent = (content: ReactElement) => {
        setModalContentLocal(content)
    }

    return (
        <ModalContext.Provider value={{ modal_state, setModalState, setModalContent, modal_content }}>
            {children}
        </ModalContext.Provider>
    )
}