import { useState } from 'react'

const useModal = (): [
    open: number, 
    openModal: () => void
] => {
    const  [open, setOpen] = useState<number>(0);
    const openModal = () => {
        setOpen((o)=>++o);
    }

    return [open, openModal];
}
 
export default useModal;