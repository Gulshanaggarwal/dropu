import { useState } from "react";




export default function useDelete() {

    const [open, setOpen] = useState(false);

    const toggle = () => {
        console.log('hello');
        setOpen(!open)
    }

    return { open, toggle }

}