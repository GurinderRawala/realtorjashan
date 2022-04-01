import SlideShowContainer from "./slideshow-container"
import slideshowPhotos from "./slideshow-photos"

const SlideShow = () =>{
    return(
        <div className="row">
            <div className="col-sm-12" style={{padding: 0}}>
                <SlideShowContainer 
                Image={slideshowPhotos[1]}
                />
            </div>
        </div>
    )
}

export default SlideShow