import { useEffect, useState } from "react"

export const FlashLogo = ({data}) =>{
    const [divIndex, setIndex] = useState(0)
    useEffect(() =>{
        const timer = setTimeout(() =>{
            if(divIndex === data.length - 1){
                setIndex(0)
            }else{
                setIndex(divIndex + 1)
            }
        },5000)
        return () =>{
            clearTimeout(timer)
        }
    },[data.length, divIndex])
    return (
        <>
            {
                data[divIndex].map((pressLogo, i) => {
               
                    return(
                        <div key={i} >
                            {
                                Object.values(pressLogo).map((imgUrl, i) => 
                                    <img key={i} src={imgUrl} alt='imgs-alo' style={{maxWidth: '100%', height: 'auto', margin: 12}} />)
                            }
                        </div> 
                    )
                })
            }
        </>
    )
}