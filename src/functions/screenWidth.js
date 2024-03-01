import {useState, useEffect} from 'react'

const ScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(null)
    useEffect(() => {
        function handleResize () {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize);
        handleResize()
        return () => window.removeEventListener("resize", handleResize);
    }, [])
    return screenWidth
}

export default ScreenWidth