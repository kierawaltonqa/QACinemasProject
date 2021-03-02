import Carousel from "./CarouselComp";
import pic1 from "./ScreenPics/StandardSeatingPlan.png"
import pic2 from "./ScreenPics/StandardSeatPic1.png"
import pic3 from "./ScreenPics/StandardSeatPic2.png"
import "./Screen.css"




const Screenpage = () => {



    return (


        <>
        <br/>
        <div className="container" style={{backgroundColor:"black"}}>
        <div className="row" >
        <div className="col-6" >
        <Carousel image1={pic1} image2={pic2} image3={pic3}/>
        </div>
        <div className="col-6">
            <Carousel image1={pic1} image2={pic2} image3={pic3}/>
        </div>
        </div>
        </div>
        {/* <img src={StandardSeatingPlan} alt=""/> */}

        </>
    )
    
}


export default Screenpage;