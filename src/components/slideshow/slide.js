import { useEffect, useState } from "react"
import SlideText from "./slide-text"
import { slideShowData } from "./slideshow-data"
export const Slide = () =>{
    const [imageIndex, setIndex] = useState(0)
    useEffect(()=>{
        const timer = setTimeout(() =>{
            if(imageIndex === slideShowData.length - 1){
                setIndex(0)
            }else{
                setIndex(imageIndex + 1)
            }
        },5000)
        return () =>{
            clearTimeout(timer)
        }
    },[imageIndex])
     
    return { 
        Image: () => <img src={ slideShowData[imageIndex].img } className='slide-image fade' alt="slide-Pic"/>,
        Text: () => <SlideText  title={ slideShowData[imageIndex].title } body={ slideShowData[imageIndex].body}/>
    }
}