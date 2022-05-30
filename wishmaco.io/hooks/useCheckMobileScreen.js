import React, {useEffect, useState} from "react";

const useCheckMobileScreen = () => {
    const [width, setWidth] = useState(null);
    useEffect(() => {
        
    }, [])
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= 768);
}

export default useCheckMobileScreen