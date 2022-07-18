import { useState } from "react";




export default function useDelete() {

    const [open, setOpen] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    const toggle = (id) => {
        setOpen(!open)
        setCurrentId(id);
    }

    return { open, currentId, toggle }

}