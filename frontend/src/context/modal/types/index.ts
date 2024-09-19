import { ReactElement } from "react";

export interface IModal {
    modal_state: boolean,
    modal_content: ReactElement,
    setModalState: (state: boolean) => void,
    setModalContent: (content:ReactElement)=>void
}