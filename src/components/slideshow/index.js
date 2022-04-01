import { Slide } from "./slide"
import SlideShowContainer from "./slideshow-container"

const SlideShow = () =>{
    const { Image, Text } = Slide()
    return(
        <div className="row">
            <div className="col-sm-12" style={{padding: 0}}>
                <SlideShowContainer 
                Image={Image}
                Text={Text}
                />
            </div>
        </div>
    )
}

export default SlideShow