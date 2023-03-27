import { useEffect, useRef } from "react";

const useClickOutside = (handler) => {
    let domNodeRef = useRef();

    useEffect(()=>{
        const eventHandler = (e)=>{
            if(!domNodeRef.current.contains(e.target)) {
                handler()
            }
        }
        document.addEventListener("mousedown",eventHandler);

        return () => document.removeEventListener("mousedown",eventHandler);
    })

    return domNodeRef;
}

export default useClickOutside;