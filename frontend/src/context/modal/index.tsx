import {createContext} from "react"
import { IModal } from "./types"


export const ModalContext = createContext<IModal | undefined>(undefined)