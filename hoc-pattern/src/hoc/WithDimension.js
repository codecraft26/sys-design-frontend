import { useEffect, useRef } from "react"
import { useState } from "react"
const withDimension = (element) => {


    function WithDimension(props){
        const compref=useRef()
        const [width, setWidth] = useState(0)
        const [height, setHeight] = useState(0)
        useEffect(()=>{
            setWidth(compref.current.offsetWidth)
            setHeight(compref.current.offsetHeight)
        
        },[compref])
        return <element ref={compref} {...props} width={width} height={height}/>

    }
    return WithDimension;

}

export default withDimension;