import Carousel from "./CarouselComp";
import pic1 from "./ScreenPics/StandardSeatingPlanBlack.png"
import pic2 from "./ScreenPics/standard-seating-in-screen.png"
import pic3 from "./ScreenPics/StandardSeatPic3.png"
import "./Screen.css"
import pic4 from "./ScreenPics/deluxeSeating1.png"
import pic5 from "./ScreenPics/deluxeSeating2.png"
import pic6 from "./ScreenPics/DeluxeSeatingPlan.png"
import ScreensReadMore from "./ScreensReadMore";




const Screenpage = () => {



    return (


        // Carousel

        <>
            <br />
            <div className="row" style={{ height: "400px" }} >
                <div className="slider-container ">
                    <Carousel image1={pic2} image2={pic3} image3={pic1} />
                </div>
                <div className="slider-container">
                    <Carousel image1={pic4} image2={pic5} image3={pic6} style={{ height: "400px" }} />
                </div>
            </div>
            <br />

            {/* Name of the seating plans  */}


            <div className="row">
                <div className="col-6">
                    <p id="beauty" className="myTitle">Standard Seating</p>
                </div>
                <div className="col-6">
                    <p id="beauty" className="myTitle" style={{ textAlign: "left" }}>Deluxe Seating</p>
                </div>
            </div>

            {/* Buttons for Read More */}

            <div className="row">
                <div className="col-md-6">
                    <ScreensReadMore />
                </div>
                <div className="col-md-6">
                    <ScreensReadMore />
                </div>
            </div>



        </>
    )

}


export default Screenpage;