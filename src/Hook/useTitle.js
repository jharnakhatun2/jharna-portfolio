import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Jharna Portfolio`;
    },[title])
}

export default useTitle;