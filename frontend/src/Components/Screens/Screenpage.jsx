import Carousel from "./CarouselComp";
import pic1 from "./ScreenPics/StandardSeatingPlanBlack.png"
import pic2 from "./ScreenPics/standard-seating-in-screen.png"
import pic3 from "./ScreenPics/StandardSeatPic3.png"
import "./Screen.css"
import pic4 from "./ScreenPics/deluxeSeating1.png"
import pic5 from "./ScreenPics/deluxeSeating2.png"
import pic6 from "./ScreenPics/DeluxeSeatingPlan.png"




const Screenpage = () => {



    return (


        <>
        <br/>
        <div className="container">
        <div className="row" >
        <div className="col-6" >
        <Carousel image1={pic2} image2={pic3} image3={pic1}/>
        </div>
        <div className="col-6">
            <Carousel image1={pic4} image2={pic5} image3={pic6}/>
        </div>
        </div>
        </div>
        {/* <img src={StandardSeatingPlan} alt=""/> */}

        </>
    )
    
}


export default Screenpage;