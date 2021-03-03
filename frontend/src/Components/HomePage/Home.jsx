import './Home.css';
import penguin from '../../Resources/penguin-wave2.jpg';
import CarouselPage from './Carousel';
import image1 from '../../Resources/cinema1.jpg';
import image2 from '../../Resources/cinema4.jpg';
import image3 from '../../Resources/cinema5.jpg';
import WelcomePage from './WelcomePage';
import Footer from '../Footer';

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <br />
                        <br />
                        <h1 id="title">Welcome To QA Cinemas
                        </h1>
                        <hr />
                        <br />
                    </div>
                </div>
                <div className="row" style={{ height: "500px" }}>
                    <div className="col-md-12 slider-container" id="carousel">
                        <CarouselPage image1={image1} image2={image2} image3={image3} />
                    </div>
                </div>
                <div className="row">
                    <WelcomePage />
                </div>
                <div className="row-md">
                    <hr />
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">
                        <img src={penguin} alt="penguin-wave" id="penguin-wave" />
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home;